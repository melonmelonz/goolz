// POST /api/visit  →  increment + return current visitor count (plain text)
// GET  /api/visit  →  return current count without incrementing
//
// Storage: Cloudflare KV (binding GOOLZ_KV, key "visits")
// KV does not support atomic increments, so the read+write race is accepted —
// for a personal site, occasional ±1 drift is fine. We do per-IP dedup over
// a 6-hour window so refreshes don't inflate the number.
import { isAllowedOrigin } from './_shared.js';

const DEDUP_TTL_SEC = 6 * 60 * 60;   // 6h
const KEY_COUNT     = 'visits';
const MAX_COUNT     = 10_000_000;    // sanity cap — anything bigger = bug or abuse

function plain(body, status, extra) {
  return new Response(String(body), {
    status,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex',
      ...(extra || {}),
    },
  });
}

async function readCount(env) {
  const raw = await env.GOOLZ_KV.get(KEY_COUNT);
  const n = parseInt(raw || '0', 10);
  return Number.isFinite(n) && n >= 0 && n < MAX_COUNT ? n : 0;
}

async function dedupKeyForIp(ip) {
  // First 8 bytes of SHA-256(salt + ip), hex-encoded. Salt prevents
  // rainbow-tabling our visitor list; truncation keeps KV keys short.
  const buf = new TextEncoder().encode('goolz-1893' + ip);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return (
    'seen:' +
    Array.from(new Uint8Array(hash))
      .slice(0, 8)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('')
  );
}

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') {
    const headers = {
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };
    if (origin && isAllowedOrigin(origin)) {
      headers['Access-Control-Allow-Origin'] = origin;
    }
    return new Response(null, { status: 204, headers });
  }

  if (!isAllowedOrigin(origin)) return plain('forbidden', 403);
  if (!env.GOOLZ_KV)            return plain('0', 200);

  if (request.method === 'GET') {
    return plain(await readCount(env), 200);
  }

  if (request.method === 'POST') {
    const ip =
      request.headers.get('CF-Connecting-IP') ||
      request.headers.get('X-Forwarded-For') ||
      'unknown';

    const dedupKey = await dedupKeyForIp(ip);
    const seen = await env.GOOLZ_KV.get(dedupKey);
    const cur  = await readCount(env);

    if (seen) return plain(cur, 200);

    const next = Math.min(cur + 1, MAX_COUNT);

    // Best-effort writes — the count and the dedup record
    ctx.waitUntil(env.GOOLZ_KV.put(KEY_COUNT, String(next)));
    ctx.waitUntil(env.GOOLZ_KV.put(dedupKey, '1', { expirationTtl: DEDUP_TTL_SEC }));

    return plain(next, 200);
  }

  return plain('method not allowed', 405);
}

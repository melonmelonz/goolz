// Shared helpers for /api/* Pages Functions.
// Files prefixed with `_` are not exposed as routes by Cloudflare Pages,
// so this is import-only.

export const ALLOWED_ORIGINS = new Set([
  'https://goolz.org',
  'https://www.goolz.org',
  'https://goolz.pages.dev',
  'http://localhost:8788',
  'http://127.0.0.1:8788',
]);

export const DOC_MAX_NAME_LEN = 80;
export const DOC_VALID_NAME   = /^[\w\s\-\.()]+$/u; // word, space, hyphen, dot, parens

// Same-origin policy: requests with no Origin header (server-to-server,
// curl) are allowed; browser cross-origin requests must be in the allowlist.
export function isAllowedOrigin(origin) {
  return !origin || ALLOWED_ORIGINS.has(origin);
}

export function corsHeaders(origin) {
  if (origin && ALLOWED_ORIGINS.has(origin)) {
    return {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Vary': 'Origin',
    };
  }
  return {};
}

export function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export function sanitizeDocName(raw, { decode = false } = {}) {
  let s = String(raw);
  if (decode) {
    try { s = decodeURIComponent(s); } catch { return null; }
  }
  const trimmed = s.trim().slice(0, DOC_MAX_NAME_LEN);
  return DOC_VALID_NAME.test(trimmed) ? trimmed : null;
}

// Standard preflight response for the docs endpoints.
export function preflight(origin) {
  return new Response(null, { status: 204, headers: corsHeaders(origin) });
}

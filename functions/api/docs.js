// GET  /api/docs        → list all document names
// POST /api/docs        → { name, content } → save document
import {
  isAllowedOrigin,
  json,
  sanitizeDocName,
  preflight,
} from './_shared.js';

const MAX_CONTENT = 200 * 1024; // 200 KB

export async function onRequest(ctx) {
  const { request, env } = ctx;
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') return preflight(origin);
  if (!isAllowedOrigin(origin))     return json({ error: 'Forbidden origin' }, 403, origin);
  if (!env.NOTEPAD_DOCS)            return json({ error: 'KV not bound' }, 500, origin);

  if (request.method === 'GET') {
    const list = await env.NOTEPAD_DOCS.list();
    return json({ docs: list.keys.map(k => k.name) }, 200, origin);
  }

  if (request.method === 'POST') {
    // Enforce content-length before reading body
    const cl = parseInt(request.headers.get('content-length') || '0', 10);
    if (cl > MAX_CONTENT + 512) return json({ error: 'Payload too large' }, 413, origin);

    let body;
    try { body = await request.json(); } catch { return json({ error: 'Invalid JSON' }, 400, origin); }

    const name = sanitizeDocName(body.name);
    if (!name) return json({ error: 'Invalid or missing name (letters, numbers, spaces, - . () only)' }, 400, origin);

    const { content } = body;
    if (typeof content !== 'string') return json({ error: 'content must be a string' }, 400, origin);
    if (new TextEncoder().encode(content).length > MAX_CONTENT) {
      return json({ error: 'Content too large (max 200 KB)' }, 413, origin);
    }

    await env.NOTEPAD_DOCS.put(name, content);
    return json({ ok: true, name }, 200, origin);
  }

  return json({ error: 'Method not allowed' }, 405, origin);
}

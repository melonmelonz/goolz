// GET    /api/docs/:name  → fetch document content
// DELETE /api/docs/:name  → delete document
import {
  isAllowedOrigin,
  json,
  sanitizeDocName,
  preflight,
} from '../_shared.js';

export async function onRequest(ctx) {
  const { request, env, params } = ctx;
  const origin = request.headers.get('Origin');

  if (request.method === 'OPTIONS') return preflight(origin);
  if (!isAllowedOrigin(origin))     return json({ error: 'Forbidden origin' }, 403, origin);
  if (!env.NOTEPAD_DOCS)            return json({ error: 'KV not bound' }, 500, origin);

  const name = sanitizeDocName(params.name || '', { decode: true });
  if (!name) return json({ error: 'Invalid name' }, 400, origin);

  if (request.method === 'GET') {
    const content = await env.NOTEPAD_DOCS.get(name);
    if (content === null) return json({ error: 'Not found' }, 404, origin);
    return json({ name, content }, 200, origin);
  }

  if (request.method === 'DELETE') {
    await env.NOTEPAD_DOCS.delete(name);
    return json({ ok: true }, 200, origin);
  }

  return json({ error: 'Method not allowed' }, 405, origin);
}

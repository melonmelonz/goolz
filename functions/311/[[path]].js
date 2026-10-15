// SPA fallback for the 311 Anomaly Tracker.
//
// `/311/* /311/index.html 200` in _redirects does not fire, because Pages
// resolves static assets before redirect rules, and a 200-rewrite to an
// existing asset is not applied to paths that have no asset of their own.
// Result: /311/reports and friends 404 on a bookmark or a refresh, and the
// app only works if you enter at /311/ and navigate client-side.
//
// This serves the SPA shell for any /311/ path that is not a real file.
// Anything with a file extension (assets, favicon, manifests) falls through
// to the asset server untouched.
export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  if (/\.[a-z0-9]+$/i.test(url.pathname)) return next();

  // Ask the asset server for the directory, not for index.html: Pages
  // canonicalises /311/index.html to /311/ with a 308, which would loop.
  // Hand the shell back as-is, too. Rebuilding the Response would copy
  // Content-Encoding onto an already-decoded body and serve an empty page.
  return next(new Request(new URL('/311/', url), request));
}

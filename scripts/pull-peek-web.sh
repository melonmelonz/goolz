#!/usr/bin/env bash
# Refresh peek/ wasm + js + style from a melonmelonz/peek release artifact.
# The standalone landing page (index.html, page.css) lives in this repo
# and is left untouched; only the Trunk-built artifacts get replaced, and
# the script rewrites the <script type="module"> hash references in
# index.html so the page picks up the new bundle.
#
# Usage:
#   scripts/pull-peek-web.sh           # latest release
#   scripts/pull-peek-web.sh v0.3.0    # specific tag
#
# Requires: gh, tar
set -euo pipefail

REPO="melonmelonz/peek"
TAG="${1:-}"
DEST="peek"

if ! command -v gh >/dev/null 2>&1; then
  echo "error: gh not found on PATH" >&2
  exit 1
fi

cd "$(git rev-parse --show-toplevel)"

if [ -z "$TAG" ]; then
  TAG="$(gh release view --repo "$REPO" --json tagName -q .tagName)"
fi

echo "pulling peek-web bundle from $REPO @ $TAG -> $DEST"

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

gh release download "$TAG" --repo "$REPO" \
  --pattern 'peek-web-bundle.tar.gz' \
  --dir "$tmp"

# Stage the bundle in $tmp/extracted, then move only the artifacts we
# want (preserving our hand-written index.html + page.css).
mkdir -p "$tmp/extracted"
tar -C "$tmp/extracted" -xzf "$tmp/peek-web-bundle.tar.gz"

mkdir -p "$DEST"
# Drop old hashed bundle artifacts before copying new ones.
rm -f "$DEST"/peek-web-*.js "$DEST"/peek-web-*_bg.wasm "$DEST/style.css"
cp "$tmp/extracted"/peek-web-*.js \
   "$tmp/extracted"/peek-web-*_bg.wasm \
   "$tmp/extracted"/style.css \
   "$DEST/"

# Rewrite the hashed filenames in our index.html so the new bundle loads.
new_js="$(basename "$(ls "$DEST"/peek-web-*.js)")"
new_wasm="$(basename "$(ls "$DEST"/peek-web-*_bg.wasm)")"
sed -i -E \
  -e "s|peek-web-[0-9a-f]+\.js|$new_js|g" \
  -e "s|peek-web-[0-9a-f]+_bg\.wasm|$new_wasm|g" \
  "$DEST/index.html"

echo "done. files now in $DEST:"
ls -la "$DEST"

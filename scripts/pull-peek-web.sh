#!/usr/bin/env bash
# Refresh next-chapter/peek/ from a melonmelonz/peek release artifact.
#
# Usage:
#   scripts/pull-peek-web.sh           # latest release
#   scripts/pull-peek-web.sh v0.2.0    # specific tag
#
# Requires: gh, tar
set -euo pipefail

REPO="melonmelonz/peek"
TAG="${1:-}"
DEST="next-chapter/peek"

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

rm -rf "$DEST"
mkdir -p "$DEST"
tar -C "$DEST" -xzf "$tmp/peek-web-bundle.tar.gz"

echo "done. files now in $DEST:"
ls -la "$DEST"

#!/usr/bin/env bash
# Deploy goolz to Cloudflare Pages.
#
# Why this isn't just `wrangler pages deploy .`:
#   `wrangler pages deploy` direct-uploads every file in the working tree
#   regardless of .gitignore. The Rust target/ dirs under
#   next-chapter/demo and next-chapter/calculator are ~80MB of .rlib build
#   artifacts that crash the upload with `SocketError: other side closed`
#   around file 400 of ~712. (.assetsignore is a Workers Assets feature
#   and does NOT filter Pages direct-deploy uploads.)
#
# This script stashes those dirs to /tmp, deploys, then restores them.
# The restore runs in a trap so target/ comes back even if wrangler fails
# or the user Ctrl-Cs.
#
# Usage:
#   scripts/deploy.sh                  # deploy main
#   scripts/deploy.sh some-branch      # deploy to a named CF Pages branch
#
# Requires: wrangler (npm i -g wrangler), authenticated to CF.

set -euo pipefail

BRANCH="${1:-main}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STASH="/tmp/goolz-target-stash"

TARGET_DIRS=(
  "next-chapter/demo/target"
  "next-chapter/calculator/target"
)

cd "$REPO_ROOT"

restore_targets() {
  local code=$?
  for d in "${TARGET_DIRS[@]}"; do
    local name
    name="$(echo "$d" | tr '/' '_')"
    if [[ -d "$STASH/$name" && ! -d "$d" ]]; then
      mv "$STASH/$name" "$d"
    fi
  done
  rmdir "$STASH" 2>/dev/null || true
  exit "$code"
}
trap restore_targets EXIT INT TERM

mkdir -p "$STASH"
for d in "${TARGET_DIRS[@]}"; do
  if [[ -d "$d" ]]; then
    name="$(echo "$d" | tr '/' '_')"
    echo "stash: $d -> $STASH/$name"
    mv "$d" "$STASH/$name"
  fi
done

echo "deploying to CF Pages (project=goolz, branch=$BRANCH)..."
wrangler pages deploy . \
  --project-name=goolz \
  --branch="$BRANCH" \
  --commit-dirty=true

#!/usr/bin/env bash
# Deploy goolz to Cloudflare Pages.
#
# Usage:
#   scripts/deploy.sh                  # deploy main
#   scripts/deploy.sh some-branch      # deploy to a named CF Pages branch
#
# Requires: wrangler (npm i -g wrangler), authenticated to CF.
#
# Note: `wrangler pages deploy` direct-uploads every file in the working
# tree regardless of .gitignore (.assetsignore is a Workers Assets feature
# and does NOT filter Pages direct-deploy uploads). Keep build artifacts
# out of the repo root or the upload will choke on them.

set -euo pipefail

BRANCH="${1:-main}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_ROOT"

echo "deploying to CF Pages (project=goolz, branch=$BRANCH)..."
wrangler pages deploy . \
  --project-name=goolz \
  --branch="$BRANCH" \
  --commit-dirty=true

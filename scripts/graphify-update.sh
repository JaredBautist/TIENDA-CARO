#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$repo_root"

if ! command -v graphify >/dev/null 2>&1; then
  echo "Graphify is not installed or is not on PATH. Install Graphify, then rerun this command." >&2
  exit 127
fi

exec graphify update . "$@"

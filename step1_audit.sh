#!/usr/bin/env bash
# ^ This line tells your system to run the file with bash.

# ---- HEADERS: where am I and when? ----
echo "=== AUDIT: ALEXIS PORTFOLIO ==="
echo "Run at: $(date)"
echo "PWD: $(pwd)"
echo

# ---- LIST top-level items so we see your starting layout ----
echo "== Top-level items =="
ls -la
echo

# ---- Show the largest things (to spot heavy folders like node_modules, data dumps) ----
# If 'du' isn't available, no worries.
echo "== Largest items (top 30) =="
du -sh * .* 2>/dev/null | sort -h | tail -n 30
echo

# ---- Find folders we probably care about (streamlit apps, deploy folders, etc.) ----
echo "== Likely web/app folders (by name) =="
find . -maxdepth 2 -type d \( \
  -iname "*deploy*" -o -iname "*brfss*" -o -iname "*strava*" -o -iname "*cancer*" \
  -o -iname "*streamlit*" -o -iname "*site*" -o -iname "*website*" -o -iname "*app*" \
\) -print
echo

# ---- Spot typical build outputs / heavy installs ----
echo "== Any build outputs / node_modules at top levels =="
find . -maxdepth 3 -type d \( -iname "node_modules" -o -iname "build" -o -iname "dist" \) -print
echo

# ---- Where are the React/Vite apps? (package.json is a good hint) ----
echo "== package.json files (possible React/Vite apps) =="
find . -maxdepth 4 -name "package.json" -print
echo

# ---- Where are Streamlit apps? (requirements with streamlit, or app.py naming) ----
echo "== requirements.txt that mention streamlit =="
grep -irl "streamlit" --include="requirements.txt" . 2>/dev/null || true
echo

echo "== Python files named like Streamlit entry points =="
find . -maxdepth 4 -type f -iregex ".*\(app\.py\|streamlit.*\.py\)" -print
echo

# ---- If this is already a git repo, show status. If not, say so. ----
echo "== Git status (if any) =="
git rev-parse --is-inside-work-tree >/dev/null 2>&1 && git status -sb || echo "Not a git repo yet."

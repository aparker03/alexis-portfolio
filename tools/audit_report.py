#!/usr/bin/env python3
"""
audit_repo.py — create a neat repo inventory:
- Markdown tree -> repo_tree.md
- CSV manifest  -> repo_manifest.csv

Usage:
  python tools/audit_repo.py --root . --max-depth 8
  python tools/audit_repo.py --root . --excludes node_modules .git build dist .next
"""
import argparse, csv, hashlib, os, sys, time
from pathlib import Path

DEFAULT_EXCLUDES = {
    ".git", "node_modules", ".venv", "venv", "__pycache__", ".cache",
    "dist", "build", ".next", ".nuxt", ".parcel-cache", ".pytest_cache",
    ".idea", ".vscode", ".DS_Store"
}

def sizeof(n: int) -> str:
    for unit in ["B","KB","MB","GB","TB"]:
        if n < 1024 or unit == "TB":
            return f"{n:.0f}{unit}" if unit=="B" else f"{n:.1f}{unit}"
        n /= 1024

def sha1_of_file(p: Path, chunk=1024*1024) -> str:
    h = hashlib.sha1()
    with p.open("rb") as f:
        while True:
            b = f.read(chunk)
            if not b: break
            h.update(b)
    return h.hexdigest()

def walk_tree(root: Path, excludes, max_depth):
    root = root.resolve()
    for dirpath, dirnames, filenames in os.walk(root):
        # prune directories in-place
        dirnames[:] = [d for d in dirnames if d not in excludes and not d.startswith(".cache")]
        rel_dir = Path(dirpath).relative_to(root)
        depth = len(rel_dir.parts)
        if max_depth is not None and depth > max_depth:
            dirnames[:] = []  # stop descending further
            continue
        yield Path(dirpath), [Path(dirpath)/f for f in filenames]

def make_markdown_tree(root: Path, excludes, max_depth):
    lines = [f"# Repository Tree for `{root.name}`", ""]
    # precompute dir structure for pretty tree
    def list_dir(path: Path, prefix="", depth=0):
        if max_depth is not None and depth > max_depth:
            return
        try:
            entries = [e for e in path.iterdir() if e.name not in excludes]
        except PermissionError:
            return
        dirs = sorted([e for e in entries if e.is_dir()])
        files = sorted([e for e in entries if e.is_file()])
        for i, d in enumerate(dirs):
            last = (i == len(dirs)-1 and not files)
            connector = "└── " if last else "├── "
            lines.append(f"{prefix}{connector}**{d.name}/**")
            list_dir(d, prefix + ("    " if last else "│   "), depth+1)
        for i, f in enumerate(files):
            connector = "└── " if i == len(files)-1 else "├── "
            try:
                sz = sizeof(f.stat().st_size)
            except (OSError, PermissionError):
                sz = "?"
            lines.append(f"{prefix}{connector}{f.name}  _({sz})_")
    list_dir(root, "", 0)
    return "\n".join(lines) + "\n"

def write_csv_manifest(root: Path, excludes, out_csv: Path, hash_small=False, hash_threshold_mb=5):
    rows = []
    threshold = hash_threshold_mb * 1024 * 1024
    now = time.time()
    for dirpath, files in walk_tree(root, excludes, None):
        for f in files:
            if f.name in excludes:
                continue
            try:
                st = f.stat()
                size = st.st_size
                mtime = st.st_mtime
                ext = f.suffix.lower()
                do_hash = hash_small and size <= threshold
                digest = sha1_of_file(f) if do_hash else ""
                rows.append({
                    "path": str(f.relative_to(root)),
                    "type": "file",
                    "size_bytes": size,
                    "size_human": sizeof(size),
                    "modified_iso": time.strftime("%Y-%m-%d %H:%M:%S", time.localtime(mtime)),
                    "age_days": round((now - mtime) / 86400, 2),
                    "ext": ext or "",
                    "sha1_if_small": digest
                })
            except (OSError, PermissionError):
                pass
    out_csv.parent.mkdir(parents=True, exist_ok=True)
    with out_csv.open("w", newline="", encoding="utf-8") as fp:
        w = csv.DictWriter(fp, fieldnames=list(rows[0].keys()) if rows else [
            "path","type","size_bytes","size_human","modified_iso","age_days","ext","sha1_if_small"
        ])
        w.writeheader()
        for r in rows:
            w.writerow(r)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".", help="Repo root (default: .)")
    ap.add_argument("--max-depth", type=int, default=None, help="Limit tree depth (e.g., 8)")
    ap.add_argument("--excludes", nargs="*", default=[], help="Extra names to exclude")
    ap.add_argument("--hash-small", action="store_true", help="SHA1 small files (<= 5MB)")
    ap.add_argument("--out-tree", default="repo_tree.md")
    ap.add_argument("--out-csv", default="repo_manifest.csv")
    args = ap.parse_args()

    root = Path(args.root).resolve()
    excludes = set(DEFAULT_EXCLUDES) | set(args.excludes)

    md = make_markdown_tree(root, excludes, args.max_depth)
    Path(args.out_tree).write_text(md, encoding="utf-8")

    write_csv_manifest(root, excludes, Path(args.out_csv), hash_small=args.hash_small)

    print(f"✓ Wrote {args.out_tree}")
    print(f"✓ Wrote {args.out_csv}")
    print("\nTip: commit these to a temporary branch if you want to review them in PR form.")

if __name__ == "__main__":
    sys.exit(main())

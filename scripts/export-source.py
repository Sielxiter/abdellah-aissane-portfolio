"""Exporte les sources redistribuables du portfolio, sans secrets ni dépendances."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

root = Path(__file__).resolve().parents[1]
excluded = {'.git', '.sites-publish', '.vercel', 'node_modules', 'dist', 'build', '__pycache__', 'test-results'}
output = root / 'public' / 'portfolio-source.zip'
with ZipFile(output, 'w', ZIP_DEFLATED) as archive:
    for path in sorted(root.rglob('*')):
        relative = path.relative_to(root)
        if (not path.is_file() or path.is_symlink() or path == output
                or excluded.intersection(relative.parts)
                or path.name.startswith('.env') or path.suffix == '.log'):
            continue
        archive.write(path, Path('abdellah-aissane-portfolio') / relative)
print('Sources exportées : public/portfolio-source.zip')

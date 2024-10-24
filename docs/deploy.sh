make html
cp -r ../docs/_build/html/* .
git add -A
git commit -m "update documentation build"
git push

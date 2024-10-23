#!/bin/bash
# Navigate to your Sphinx project directory and build the docs
cd docs
make html

# Copy the built HTML files to the GitHub repository
cp -r _build/html/_sources/* /Users/Apple/Documents/LevLUp/AWS/Projects/CDA/CI:CD/Python/MasterPy/docs

# Navigate to the GitHub repository and push the changes
cd ../your-repo
git add .
git commit -m "Update Sphinx documentation"
git push origin main

import os
import sys
sys.path.insert(0, os.path.abspath('docsrc'))

# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information
project = 'ServerlessPy'
copyright = '2024, Benjamin Burton'
author = 'Benjamin Burton'
release = '1.0'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration
extensions = [
    'myst_parser',
]
templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


html_theme = 'sphinx_book_theme'
html_theme_options = {
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/BenjaminBurton",
            "icon": "fa-brands fa-square-github",
            "type": "fontawesome",
        },
        {
            "name": "Medium",
            "url": "https://medium.com/@mrburton",
            "icon": "fa-brands fa-medium",
        },
        {
            "name": "Linkedin",
            "url": "https://www.linkedin.com/in/benjaminlburton/",
            "icon": "fa-brands fa-linkedin",
        },
    ],
}


html_static_path = ['_static']
html_logo = '_static/images/SrvPy.png'
html_css_files = [
    'custom.css',
]


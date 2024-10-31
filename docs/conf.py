import os
import sys


title = "ServerlessPy Documentation"


# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'ServerlessPy Documentation'
copyright = '2024, Benjamin Burton'
author = 'Benjamin Burton'

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = []

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']



# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output


# html theme options for display
html_theme_options = {
    "icon_links": [
        {
            "name": "GitHub",
            "url": "https://github.com/BenjaminBurton",
            "icon": "_static/github-brands-solid.svg",
            "type": "local",
        },
        {
            "name": "Medium",
            "url": "https://medium.com/@mrburton",
            "icon": "_static/medium-brands-solid.svg",
            "type": "local",
        },
        {
            "name": "LinkedIn",
            "url": "https://www.linkedin.com/in/benjaminlburton/",
            "icon": "_static/linkedin-in-brands-solid.svg",
            "type": "local",
        },
         {
            "name": "Twitter",
            "url": "#",
            "icon": "_static/Twitter-in-brands-solid.svg",
            "type": "local",
        },
    ],
    # html_logo = "_static/logo-dark.svg"
    "logo": {
        "image_light": "_static/logo-light.svg",
        "image_dark": "_static/logo-dark.svg",
        "link": "#",  # Optional: link for the logo
        "text": "ServerlessPy",  # Optional: text next to the logo
        "alt_text": "ServerlessPy - Home",  # Optional: alternative text for accessibility
    }
}

# html theme configuration
html_theme = "pydata_sphinx_theme"
html_static_path = ['_static']

# Custom CSS files
html_css_files = [
    "css/custom.css",
]

# html sidebar behaviour
html_sidebars = {
    "**": ["sidebar-nav-bs", "sidebar-ethical-ads"],
    "primary_sidebar_end": ["sidebar-ethical-ads"],
}

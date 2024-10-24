.. _file_info_examples:

File Information Extraction Examples
====================================


Method 1: Plain Script
----------------------

This method directly lists and prints file information in the current working directory without defining a function.

.. code-block:: python

    import os

    # List to store file information
    files_info = []
    # Iterate through the items in the current directory
    for file_name in os.listdir('.'):
        if os.path.isfile(file_name):
            # Store file name and size in a dictionary
            file_info = {
                'name': file_name,
                'size': os.path.getsize(file_name)
            }
            files_info.append(file_info)

    # Print the file information
    print(files_info)


Method 2: Basic Function
------------------------

This method defines a function to extract file information in the current working directory.

.. code-block:: python

    import os

    # Function to extract file information in the current working directory
    def get_files_info():
        files_info = []
        # Iterate through the items in the current directory
        for file_name in os.listdir('.'):
            if os.path.isfile(file_name):
                # Store file name and size in a dictionary
                file_info = {
                    'name': file_name,
                    'size': os.path.getsize(file_name)
                }
                files_info.append(file_info)
        return files_info

    # Retrieve and print the file information
    file_data = get_files_info()
    print(file_data)


Method 3: Recursive Function
----------------------------

This method defines a function to recursively extract file information from any specified directory and its subdirectories.

.. code-block:: python

    import os

    # Function to extract file information in any specified directory
    def get_files_info(path='.'):
        files_info = []
        # Walk through the directory, including all subdirectories
        for root, dirs, files in os.walk(path):
            for file_name in files:
                file_path = os.path.join(root, file_name)
                # Store file path and size in a dictionary
                file_info = {
                    'name': file_path,
                    'size': os.path.getsize(file_path)
                }
                files_info.append(file_info)
        return files_info

    # Example usage: retrieve and print file information for a specified directory
    file_data = get_files_info('/your/directory/path')  # Replace with your desired path
    print(file_data)


Method 4: Nested Dictionaries
-----------------------------

This method defines a function to extract file information as nested dictionaries, mirroring the folder structure.

.. code-block:: python

    import os

    # Function to extract file information as nested dictionaries
    def get_files_info(path='.'):
        files_info = {}
        # Walk through the directory, including all subdirectories
        for root, dirs, files in os.walk(path):
            dir_info = files_info
            # Generate relative path components for nesting
            rel_path = os.path.relpath(root, path).split(os.sep)
            for part in rel_path:
                dir_info = dir_info.setdefault(part, {})
            for file_name in files:
                file_path = os.path.join(root, file_name)
                # Store file size in the nested dictionary
                dir_info[file_name] = {'size': os.path.getsize(file_path)}
        return files_info

    # Example usage: retrieve and print nested file information for a specified directory
    file_data = get_files_info('/your/directory/path')  # Replace with your desired path
    print(file_data)

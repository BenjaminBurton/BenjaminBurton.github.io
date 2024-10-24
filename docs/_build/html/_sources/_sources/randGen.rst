Random Name Generator
=======================



Example 1
===============

.. code-block:: python

    import random

    # Lists of possible first and last names
    first_names = ["Alex", "Jamie", "Chris", "Pat", "Taylor", "Jordan", "Casey", "Riley", "Morgan"]
    last_names = ["Smith", "Johnson", "Brown", "Williams", "Jones", "Garcia", "Miller", "Davis", "Lopez"]

    # Function to generate a random name
    def generate_random_name():
        first_name = random.choice(first_names)
        last_name = random.choice(last_names)
        return f"{first_name} {last_name}"

    # Generate and print a random name
    random_name = generate_random_name()
    print(random_name)


Example 2
============

.. code-block:: python

    import random
    import string

    def generate_unique_name(department, length=8):
        # Generate random characters and numbers
        random_chars = ''.join(random.choices(string.ascii_uppercase + string.digits, k=length))
        # Create the unique name with department and random characters
        unique_name = f"{department}-{random_chars}"
        return unique_name

    def main():
        # Take user input for the number of EC2 instances and department name
        num_instances = int(input("Enter the number of EC2 instances you need names for: "))
        department = input("Enter the name of your department: ")

        # Generate unique names
        unique_names = [generate_unique_name(department) for _ in range(num_instances)]

        # Output the unique names
        for i, name in enumerate(unique_names, 1):
            print(f"Instance {i}: {name}")

    if __name__ == "__main__":
        main()




Example 3 Python Script UUID
====================

.. code-block:: python

    import uuid

    def generate_unique_name(department):
        unique_id = uuid.uuid4().hex[:8]  # Generate a unique ID
        unique_name = f"{department}-{unique_id}"  # Combine with department name
        return unique_name

    def main():
        # Take user input for the number of EC2 instances and department name
        num_instances = int(input("Enter the number of EC2 instances you need names for: "))
        department = input("Enter the name of your department: ")

        # Generate unique names
        unique_names = [generate_unique_name(department) for _ in range(num_instances)]

        # Output the unique names
        for i, name in enumerate(unique_names, 1):
            print(f"Instance {i}: {name}")

    if __name__ == "__main__":
        main()



Example 4 Python Timestamp Random
=========================

.. code-block:: python

    import hashlib
    import random
    import string

    def generate_unique_name(department):
        timestamp = int(time.time())  # Current timestamp
        random_chars = ''.join(random.choices(string.ascii_uppercase + string.digits, k=6))
        unique_name = f"{department}-{timestamp}-{random_chars}"
        return unique_name

    def main():
        num_instances = int(input("Enter the number of EC2 instances you need names for: "))
        department = input("Enter the name of your department: ")

        unique_names = [generate_unique_name(department) for _ in range(num_instances)]

        for i, name in enumerate(unique_names, 1):
            print(f"Instance {i}: {name}")

    if __name__ == "__main__":
        main()



Example 5 Python Script Hash Function
==============================

.. code-block:: python

    import hashlib
    import random
    import string

    def generate_unique_name(department):
        random_string = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        hash_object = hashlib.sha256(random_string.encode())
        unique_name = f"{department}-{hash_object.hexdigest()[:8]}"
        return unique_name

    def main():
        num_instances = int(input("Enter the number of EC2 instances you need names for: "))
        department = input("Enter the name of your department: ")

        unique_names = [generate_unique_name(department) for _ in range(num_instances)]

        for i, name in enumerate(unique_names, 1):
            print(f"Instance {i}: {name}")

    if __name__ == "__main__":
        main()





Example 6 Python Script Incremental Counter
====================================

.. code-block:: python

    def generate_unique_name(department, counter):
    unique_name = f"{department}-{counter:04d}"
    return unique_name

    def main():
        num_instances = int(input("Enter the number of EC2 instances you need names for: "))
        department = input("Enter the name of your department: ")

        unique_names = [generate_unique_name(department, i) for i in range(1, num_instances + 1)]

        for i, name in enumerate(unique_names, 1):
            print(f"Instance {i}: {name}")

    if __name__ == "__main__":
        main()
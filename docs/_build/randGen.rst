Random Name Generator
========================

Code example on how to create a function that returns random names 

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

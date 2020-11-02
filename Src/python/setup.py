import setuptools

with open("../../README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="python-node-connect",
    version="0.0.1",
    author="Daniel Rustrum",
    author_email="danieltrustrum@gmail.com",
    description="Creates a 2-way connection between python and NodeJS.",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/DanielRustrum/Python-Node-Connect",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.6',
)
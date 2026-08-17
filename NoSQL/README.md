# NoSQL

## Description

This project introduces the fundamentals of NoSQL databases, with a focus on MongoDB. It covers the differences between SQL and NoSQL databases, document storage, database operations, queries, and the use of MongoDB with Python through PyMongo.

## Learning Objectives

By the end of this project, I should be able to explain:

* What NoSQL means
* The differences between SQL and NoSQL databases
* What ACID means
* What document storage is
* The different types of NoSQL databases
* The benefits of using a NoSQL database
* How to query information from a NoSQL database
* How to insert, update, and delete information
* How to use MongoDB
* How to interact with MongoDB using Python and PyMongo

## Requirements

### MongoDB Command Files

* Ubuntu 20.04 LTS
* MongoDB 4.4
* All files must end with a new line
* The first line of every MongoDB command file must be a comment
* File length is tested using `wc`

### Python Scripts

* Ubuntu 20.04 LTS
* Python 3.9
* PyMongo 4.8.0
* All files must end with a new line
* The first line of every Python file must be `#!/usr/bin/env python3`
* Code must follow `pycodestyle` 2.5.*
* All modules must have documentation
* All functions must have documentation
* Python code must not execute when imported

## Files

| File               | Description                              |
| ------------------ | ---------------------------------------- |
| `0-list_databases` | Lists all databases available in MongoDB |

## Usage

MongoDB command files can be executed using the Mongo shell:

```bash
cat 0-list_databases | mongo
```

Python scripts can be executed with:

```bash
./script.py
```

## Technologies

* MongoDB 4.4
* Python 3.9
* PyMongo 4.8.0
* Ubuntu 20.04 LTS

## Author

**Anthony Caban**
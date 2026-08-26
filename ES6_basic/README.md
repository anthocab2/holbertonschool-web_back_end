# NoSQL

## Description

This project introduces the fundamentals of NoSQL databases with a focus on MongoDB and PyMongo.

The project covers database and collection operations, document creation, querying, updating, deleting, and interacting with MongoDB through Python. It also introduces practical data analysis by extracting statistics from Nginx logs stored in MongoDB.

## Learning Objectives

By the end of this project, I should be able to explain:

* What NoSQL means
* The differences between SQL and NoSQL databases
* What ACID means
* What document storage is
* The different types of NoSQL databases
* The benefits of using a NoSQL database
* How to query information from a NoSQL database
* How to insert, update, and delete documents
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
* The first line of every Python script must be exactly `#!/usr/bin/env python3`
* Code must follow `pycodestyle` 2.5.*
* All modules must contain documentation
* All functions must contain documentation
* Python code must not execute when imported

## Files

| File                       | Description                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| `0-list_databases`         | Lists all databases in MongoDB                                          |
| `1-use_or_create_database` | Creates or switches to the `my_db` database                             |
| `2-insert`                 | Inserts a document into the `school` collection                         |
| `3-all`                    | Lists all documents in the `school` collection                          |
| `4-match`                  | Lists documents matching the name `Holberton school`                    |
| `5-count`                  | Displays the number of documents in the `school` collection             |
| `6-update`                 | Adds or updates the address of matching school documents                |
| `7-delete`                 | Deletes all school documents matching a specific name                   |
| `8-all.py`                 | Returns all documents from a MongoDB collection using PyMongo           |
| `9-insert_school.py`       | Inserts a school document using keyword arguments and returns its `_id` |
| `10-update_topics.py`      | Updates the topics of schools matching a specific name                  |
| `11-schools_by_topic.py`   | Returns schools that teach a specified topic                            |
| `12-log_stats.py`          | Displays statistics about Nginx logs stored in MongoDB                  |

## MongoDB Usage

MongoDB command files can be executed by passing them to the Mongo shell:

```bash
cat 0-list_databases | mongo
```

When a database is required:

```bash
cat 3-all | mongo my_db
```

## Python Usage

Python scripts can be executed directly after giving them executable permissions:

```bash
chmod +x 12-log_stats.py
./12-log_stats.py
```

Python files can be checked for style compliance with:

```bash
pycodestyle 12-log_stats.py
```

## Technologies

* MongoDB 4.4
* Python 3.9
* PyMongo 4.8.0
* Ubuntu 20.04 LTS

## Author

**Anthony Caban**
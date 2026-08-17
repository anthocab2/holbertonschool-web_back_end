# Pagination

This project focuses on implementing pagination techniques in Python for
efficiently handling and retrieving subsets of large datasets.

Pagination allows applications and APIs to divide large collections of data
into smaller pages, improving performance and making data easier to consume.

## Learning Objectives

By the end of this project, I should be able to explain:

- How to paginate a dataset using `page` and `page_size` parameters.
- How to calculate index ranges for pagination.
- How to paginate a dataset using hypermedia metadata.
- How to implement deletion-resilient pagination.
- How pagination is used in REST APIs.

## Requirements

- Ubuntu 20.04 LTS.
- Python 3.9.
- All files must end with a new line.
- Python files must start with `#!/usr/bin/env python3`.
- Code must follow `pycodestyle` version 2.5.*.
- All modules must contain documentation.
- All functions must contain documentation.
- All functions and coroutines must use type annotations.

## Dataset

The project uses the `Popular_Baby_Names.csv` dataset to practice pagination
with real data.

## Files

| File | Description |
| --- | --- |
| `0-simple_helper_function.py` | Calculates the start and end indexes for a page. |
| `Popular_Baby_Names.csv` | Dataset used throughout the pagination project. |

Additional files will be added as the project progresses.

## Usage

Example:

```python
index_range = __import__('0-simple_helper_function').index_range

print(index_range(1, 7))
print(index_range(3, 15))
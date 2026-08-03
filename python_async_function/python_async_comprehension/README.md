# Python - Async Comprehension

## Description

This project introduces asynchronous programming concepts in Python.
It focuses on asynchronous generators, asynchronous comprehensions, and
type annotations for asynchronous code.

The goal is to understand how Python handles asynchronous execution using
`async` and `await`, and how to create efficient asynchronous workflows.

## Learning Objectives

At the end of this project, you should be able to explain:

- How to write an asynchronous generator.
- How to use async comprehensions.
- How to type-annotate generators.
- How asynchronous execution works in Python.
- How to work with coroutines and asynchronous iterators.

## Requirements

- Ubuntu 20.04 LTS
- Python 3.8
- Allowed editors: vi, vim, emacs
- Code must follow pycodestyle version 2.5.x
- All files must end with a new line.
- All modules and functions must include documentation.
- All functions and coroutines must use type annotations.

## Files

| File | Description |
| --- | --- |
| `0-async_generator.py` | Creates an asynchronous generator that yields random numbers asynchronously. |

## Usage

Example:

```bash
$ ./0-main.py
[4.403136952967102, 6.9092712604587465, 6.293445466782645,
4.549663490048418, 4.1326571686139015, 9.99058525304903,
6.726734105473811, 9.84331704602206, 1.0067279479988345,
1.3783306401737838]
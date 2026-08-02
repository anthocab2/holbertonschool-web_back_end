# Python Variable Annotations

This project introduces type annotations in Python 3 and how they improve code readability, maintainability, and static analysis.

## Learning Objectives

At the end of this project, you should be able to explain:

- Type annotations in Python 3
- How to specify function signatures using type hints
- How to annotate variables
- Duck typing
- How to validate code using mypy
- Benefits of static type checking

## Requirements

- Ubuntu 20.04 LTS
- Python 3.9
- pycodestyle 2.5
- All files executable
- All files end with a new line
- First line of every file:

```python
#!/usr/bin/env python3
```

- All modules, classes, and functions must contain documentation

## Project Structure

```text
python_variable_annotations/
├── README.md
├── 0-add.py
├── 1-concat.py
├── 2-floor.py
├── 3-to_str.py
├── 4-define_variables.py
├── 5-sum_list.py
├── 6-sum_mixed_list.py
├── 7-to_kv.py
├── 8-make_multiplier.py
├── 9-element_length.py
├── 100-safe_first_element.py
├── 101-safely_get_value.py
├── 102-type_checking.py
```

## Usage

Example:

```python
from 0_add import add

result = add(1.5, 2.5)
print(result)
```

## Concepts Covered

- Function annotations
- Variable annotations
- Generic types
- Callable types
- Iterable types
- Sequence types
- Mapping types
- Optional values
- Duck typing
- Static type checking with mypy

## Checking Style

```bash
pycodestyle *.py
```

## Type Checking

```bash
mypy .
```

## Author

Anthony Caban
Holberton School
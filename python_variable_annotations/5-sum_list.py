#!/usr/bin/env python3
"""Module that provides a typed list summation function."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Return the sum of all floats in a list."""
    return sum(input_list)

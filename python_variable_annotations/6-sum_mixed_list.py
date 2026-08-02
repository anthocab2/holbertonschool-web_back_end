#!/usr/bin/env python3
"""Module that provides a typed mixed list summation function."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of integers and floats in a list."""
    return sum(mxd_lst)

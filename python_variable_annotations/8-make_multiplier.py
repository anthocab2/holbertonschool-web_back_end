#!/usr/bin/env python3
"""Module that provides a typed multiplier function generator."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Return a function that multiplies a float by a multiplier."""
    def multiply(value: float) -> float:
        """Return the multiplication of a value by the multiplier."""
        return value * multiplier

    return multiply

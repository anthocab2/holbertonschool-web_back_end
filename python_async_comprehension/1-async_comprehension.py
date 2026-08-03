#!/usr/bin/env python3
"""Module that collects random numbers asynchronously."""

from typing import List

from 0-async_generator import async_generator


async def async_comprehension() -> List[float]:
    """Collect ten random numbers using an async comprehension."""
    return [number async for number in async_generator()]

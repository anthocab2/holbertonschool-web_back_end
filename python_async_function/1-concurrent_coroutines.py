#!/usr/bin/env python3
"""Concurrent coroutines."""

import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n, max_delay):
    """Execute wait_random n times and return delays in ascending order."""
    delays = []

    tasks = []
    for _ in range(n):
        tasks.append(wait_random(max_delay))

    for delay in asyncio.as_completed(tasks):
        delays.append(await delay)

    return delays

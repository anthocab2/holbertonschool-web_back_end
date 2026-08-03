#!/usr/bin/env python3
"""Execute multiple coroutines concurrently."""

import asyncio
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """Return a list of delays from multiple concurrent coroutines."""
    delays = []

    tasks = []
    for _ in range(n):
        tasks.append(asyncio.create_task(wait_random(max_delay)))

    for task in asyncio.as_completed(tasks):
        delays.append(await task)

    return delays

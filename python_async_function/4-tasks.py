#!/usr/bin/env python3
"""Execute multiple asyncio tasks."""

import asyncio

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n, max_delay):
    """Execute tasks and return delays in ascending order."""
    delays = []

    tasks = []
    for _ in range(n):
        tasks.append(task_wait_random(max_delay))

    for task in asyncio.as_completed(tasks):
        delays.append(await task)

    return delays

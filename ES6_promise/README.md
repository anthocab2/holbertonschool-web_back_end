# ES6 Promises

## Description

This project focuses on asynchronous programming in JavaScript using ES6 Promises.

It covers how to create and handle promises, work with asynchronous functions, manage errors, and use modern JavaScript features such as `async` and `await`.

## Learning Objectives

By the end of this project, I should be able to explain and use:

* JavaScript Promises
* `Promise.resolve()`
* `Promise.reject()`
* `.then()`
* `.catch()`
* `.finally()`
* `Promise.all()`
* `Promise.allSettled()`
* `Promise.race()`
* `async` functions
* The `await` operator
* `throw`
* `try` / `catch`
* Error handling in asynchronous JavaScript

## Requirements

* Ubuntu 20.04 LTS
* Node.js 20.x.x
* npm
* JavaScript ES6+
* All files must use the `.js` extension
* All files must end with a new line
* All functions must be exported
* Code must pass ESLint
* Tests are executed using Jest

## Installation

Install the project dependencies with:

```bash
npm install
```

## Testing

Run the test suite with:

```bash
npm run test
```

Run ESLint with:

```bash
npm run lint
```

Run an individual JavaScript file with:

```bash
npm run dev <file>
```

Example:

```bash
npm run dev 0-main.js
```

## Files

| File                 | Description                                          |
| -------------------- | ---------------------------------------------------- |
| `0-promise.js`       | Returns a JavaScript Promise                         |
| `1-promise.js`       | Creates a Promise based on success or failure        |
| `2-then.js`          | Handles Promise resolution and rejection             |
| `3-all.js`           | Works with multiple Promises using `Promise.all()`   |
| `4-user-promise.js`  | Returns user data using a resolved Promise           |
| `5-photo-reject.js`  | Creates a rejected Promise                           |
| `6-final-user.js`    | Handles multiple asynchronous operations             |
| `7-load_balancer.js` | Resolves with the result of the fastest Promise      |
| `8-try.js`           | Uses `throw` and error handling                      |
| `9-try.js`           | Handles function execution with `try` / `catch`      |
| `100-await.js`       | Uses `async` and `await` for asynchronous operations |

## Technologies

* JavaScript
* Node.js
* ES6
* Jest
* Babel
* ESLint

## Author

**Anthony Caban**

Holberton School
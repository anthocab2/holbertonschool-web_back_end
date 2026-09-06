# Node.js Basics

This project is part of the Holberton School Web Back-End curriculum. It introduces the fundamentals of using Node.js to execute JavaScript outside the browser, work with modules, interact with the process API, read files, and build HTTP servers using both Node.js and Express.

## Learning Objectives

By the end of this project, I should be able to explain how to:

* Run JavaScript using Node.js
* Use Node.js modules
* Read files using Node.js modules
* Use the `process` API to access command-line arguments and environment variables
* Create a basic HTTP server using Node.js
* Create an HTTP server using Express.js
* Create advanced routes with Express.js
* Use ES6 with Node.js and Babel
* Use Nodemon to improve the development workflow

## Requirements

* Ubuntu 20.04 LTS
* Node.js 20.x.x
* JavaScript files must use the `.js` extension
* All files must end with a new line
* All functions and classes must be exported using `module.exports`
* Code must pass ESLint checks
* Code must pass Jest tests
* The complete project can be verified with:

```bash
npm run full-test
```

## Installation

Install the project dependencies with:

```bash
npm install
```

## Files

| File              | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `0-console.js`    | Defines and exports a function that prints a message to standard output |
| `database.csv`    | Sample student database used throughout the project                     |
| `package.json`    | Defines project dependencies and npm scripts                            |
| `babel.config.js` | Babel configuration                                                     |
| `.eslintrc.js`    | ESLint configuration                                                    |

## Usage

Example using `0-console.js`:

```javascript
const displayMessage = require('./0-console');

displayMessage('Hello NodeJS!');
```

Run it with Node.js:

```bash
node 0-main.js
```

Expected output:

```text
Hello NodeJS!
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

Run all project checks with:

```bash
npm run full-test
```

## Author

**Anthony Caban**

Holberton School
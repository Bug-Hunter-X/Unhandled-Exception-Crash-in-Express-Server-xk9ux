# Unhandled Exception Crash in Express Server
This repository demonstrates a common error in Express.js applications: improper error handling leading to server crashes without informative logs.  The `bug.js` file showcases this issue. The `bugSolution.js` provides a solution incorporating robust error handling and logging.

## Problem
The original code lacks a proper mechanism to catch and handle exceptions. This means that any unhandled error, such as a database connection failure or unexpected input, will cause the server to crash without providing any meaningful information for debugging.

## Solution
The solution uses a centralized error handler middleware to catch exceptions, log them with relevant details (e.g., stack trace), and send appropriate responses to the client. This ensures the server remains operational even in the face of errors and facilitates better debugging.

## How to run:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to run the buggy code and `node bugSolution.js` to run the fixed code. 

Observe the difference in behavior when an error occurs.
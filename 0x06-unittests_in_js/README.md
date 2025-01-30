# NodeJS Unit Testing

This project contains tasks for learning unit testing in NodeJS using various testing libraries and frameworks.

## Learning Objectives
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements
- All files will be interpreted/compiled on Ubuntu 18.04 LTS using NodeJS 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- All test files should be inside a `test` folder
- Your code should use the `js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning

## Tasks

### 0. Basic test with Mocha and Node assertion library
- Create a function `calculateNumber` that accepts two arguments (a and b)
- The function rounds the two numbers and returns their sum
- Test cases should be written in `0-calcul.test.js`
- Use Node's assert module

### 1. Combining descriptions
- Upgrade the previous `calculateNumber` function
- Add a new argument `type` (SUM, SUBTRACT, or DIVIDE)
- Implement the appropriate operations
- Write test cases in `1-calcul.test.js`

### 2. Basic test using Chai assertion library
- Rewrite the test suite using Chai's `expect`
- Tests should be in `2-calcul_chai.test.js`

### 3. Spies
- Learn to use Sinon spies
- Create utility functions for payment calculations
- Write tests to verify function calls

### 4. Stubs
- Learn to use Sinon stubs
- Create test cases that stub expensive API calls
- Verify console output

### 5. Hooks
- Implement test hooks (before, after, beforeEach, afterEach)
- Create test suites that use hooks effectively

### 6. Async tests
- Write async tests using done callback
- Create and test async functions
- Handle Promises in tests

### 7. Skip tests
- Learn to skip tests using `it.skip()`
- Handle test suites with multiple cases

### 8. Basic Integration testing
- Create a basic Express server
- Write integration tests for API endpoints
- Test HTTP responses

### 9. Regex integration testing
- Add regex validation to routes
- Test API endpoints with parameters
- Handle error cases

### 10. Deep equality & Post integration testing
- Test complex object responses
- Handle POST requests in Express
- Write tests for POST endpoints

## Installation
```bash
npm install
```

## Running Tests
```bash
npm test
```

## Dependencies
- Mocha
- Chai
- Sinon
- Express (for integration tests)
- Request (for API testing)

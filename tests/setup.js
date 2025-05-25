/**
 * Test Setup Configuration
 */

// Set test environment
process.env.NODE_ENV = 'test'
process.env.LOG_LEVEL = 'error' // Reduce log noise during tests

// Global test timeout
jest.setTimeout(10000)

// Setup global test utilities if needed
global.testUtils = {
  // Add any global test utilities here
}

// Mock console methods if needed to reduce noise
// global.console = {
//   ...console,
//   log: jest.fn(),
//   debug: jest.fn(),
//   info: jest.fn(),
//   warn: jest.fn(),
//   error: jest.fn(),
// };

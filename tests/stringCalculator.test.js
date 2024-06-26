const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('adds zero when given an empty string', () => {
    expect(add('')).toBe(0);
  });
});

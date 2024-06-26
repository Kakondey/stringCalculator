const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
  test('adds zero when given an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number itself when given a single number', () => {
    expect(add('1')).toBe(1);
  });

  test('correctly adds numbers seperated by commas', () => {
    expect(add('1,2,3')).toBe(6);
  });

  test('correctly adds numbers seperated by newlines', () => {
    expect(add('1\n2\n3')).toBe(6);
  });

  test('allows changing the delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('allows changing the delimiter 2', () => {
    expect(add('//<\n1<2<5')).toBe(8);
  });
  test('throws an exception for a negative number', () => {
    expect(() => add('-1')).toThrow(
      'negative numbers not allowed -1'
    );
  });

  test('lists all negative numbers in the exception message', () => {
    expect(() => add('//;\n-1;-2;-3')).toThrow(
      'negative numbers not allowed -1 -2 -3'
    );
  });
});

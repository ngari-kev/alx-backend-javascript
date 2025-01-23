const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should round and sum two positive numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should round and sum with first number rounded up', () => {
    assert.strictEqual(calculateNumber(1.5, 2.3), 4);
  });

  it('should round and sum with second number rounded up', () => {
    assert.strictEqual(calculateNumber(1.3, 2.5), 4);
  });

  it('should handle zero', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle negative numbers', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });
});

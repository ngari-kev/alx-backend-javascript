// 1-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber", () => {
  describe("SUM", () => {
    it("should round and sum two positive numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 1.4, 2.6), 4);
    });
    it("should round and sum with negative numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -1.4, -2.6), -4);
    });
  });

  describe("SUBTRACT", () => {
    it("should round and subtract two positive numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 5.4, 2.6), 2);
    });
    it("should round and subtract with negative numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -5.4, -2.6), -2);
    });
  });

  describe("DIVIDE", () => {
    it("should round and divide two positive numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 8.4, 2.6), 8 / 3);
    });
    it("should return Error when dividing by zero", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 8.4, 0), "Error");
    });
    it("should round and divide negative numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -8.4, -2.6), -8 / -3);
    });
  });
});

it("should throw an error for an invalid type", () => {
  assert.throws(() => calculateNumber("INVALID", 1, 2), Error);
});

const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai.js");

describe("calculateNumber", () => {
  it("should throw an error for an invalid type", () => {
    expect(() => calculateNumber("INVALID", 1, 2)).to.throw("Invalid type");
  });

  describe("SUM", () => {
    it("should round and sum two positive numbers", () => {
      expect(calculateNumber("SUM", 1.4, 2.6)).to.equal(4);
    });

    it("should round and sum with negative numbers", () => {
      expect(calculateNumber("SUM", -1.4, -2.6)).to.equal(-4);
    });
  });

  describe("SUBTRACT", () => {
    it("should round and subtract two positive numbers", () => {
      expect(calculateNumber("SUBTRACT", 3.6, 1.2)).to.equal(3);
    });

    it("should round and subtract with negative numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.4, -3.7)).to.equal(2);
    });
  });

  describe("DIVIDE", () => {
    it("should round and divide two positive numbers", () => {
      expect(calculateNumber("DIVIDE", 8.4, 2.6)).to.be.closeTo(2.6667, 0.0001);
    });

    it("should return Error when dividing by zero", () => {
      expect(calculateNumber("DIVIDE", 8.4, 0)).to.equal("Error");
    });

    it("should round and divide negative numbers", () => {
      expect(calculateNumber("DIVIDE", -8.4, -2.6)).to.be.closeTo(
        2.6667,
        0.0001,
      );
    });
  });
});

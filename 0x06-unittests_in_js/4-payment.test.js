const sinon = require("sinon");
const assert = require("assert");
const sendPaymentRequestToApi = require("./4-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  it("should call Utils.calculateNumber with SUM type, totalAmount, and totalShipping", () => {
    const calculateNumberStub = sinon.stub(Utils, "calculateNumber").returns(10);
    const consoleLogSpy = sinon.spy(console, "log");

    sendPaymentRequestToApi(100, 20);

    assert(calculateNumberStub.calledOnceWithExactly("SUM", 100, 20));
    assert(consoleLogSpy.calledOnceWithExactly("The total is: 10"));

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

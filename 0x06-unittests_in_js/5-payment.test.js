const sinon = require("sinon");
const assert = require("assert");
const sendPaymentRequestToApi = require("./5-payment");
const Utils = require("./utils");

describe("sendPaymentRequestToApi", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = sinon.spy(console, "log");
  });

  afterEach(() => {
    consoleLogSpy.restore();
  });

  it('should log "The total is: 120" when called with 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    assert(consoleLogSpy.calledOnceWithExactly("The total is: 120"));
    assert.strictEqual(consoleLogSpy.callCount, 1);
  });

  it('should log "The total is: 20" when called with 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    assert(consoleLogSpy.calledOnceWithExactly("The total is: 20"));
    assert.strictEqual(consoleLogSpy.callCount, 1);
  });
});

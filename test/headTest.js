const assert = require("chai").assert;
const head = require("../head");
const assertEqual = require("../assertEqual");

// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([1]), 1);
// assertEqual(head([]), undefined);

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(["5"]), "5");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

const eqArrays = require("../eqArrays");
const assert = require("chai").assert;

describe("#eqArrays", () => {
  it("should comepare two arrays and return true based on perfect match", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});
describe("#eqArrays", () => {
  it("should comepare two arrays and return true based on perfect match", () => {
    assert.equal(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      ),
      false
    );
  });
});

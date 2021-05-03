const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPositions", () => {
  it("should return all the indices in the string where each character is found", () => {
    assert.deepEqual(letterPositions("lighthouse labs").g, [2]);
  });
});

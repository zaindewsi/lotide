const assert = require("chai").assert;
const eqObjects = require("../eqObjects");

describe("#eqObjects", () => {
  it("should comepare two objects and return true based on perfect match", () => {
    assert.deepEqual(
      eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      true
    );
  });
});

describe("#eqObjects", () => {
  it("should comepare two objects and return false based on perfect match", () => {
    assert.deepEqual(
      eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),
      false
    );
  });
});

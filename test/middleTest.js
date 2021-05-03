const middle = require("../middle");
const assert = require("chai").assert;

describe("#middle", () => {
  it("returns empty array [] if the array length is 2 items or less", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns middle item [2] if the array length is odd", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns two middle items [4,5] if the array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});

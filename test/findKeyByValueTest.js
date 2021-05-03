const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("should return the first key that contains a given value", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});
describe("#findKeyByValue", () => {
  it("should return undefined if no matching key is found", () => {
    assert.equal(
      findKeyByValue(bestTVShowsByGenre, "That '70s Show"),
      undefined
    );
  });
});

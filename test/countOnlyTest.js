const assert = require("chai").assert;
const countOnly = require("../countOnly");

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

describe("#countOnly", () => {
  it("should return the count of specific items in a collection", () => {
    const result1 = countOnly(firstNames, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });
    assert.deepEqual(result1, {
      Jason: 1,
      Fang: 2,
    });
  });
});

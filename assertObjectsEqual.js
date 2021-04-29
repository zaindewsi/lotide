const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (const key of obj1Keys) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;

  eqObjects(actual, expected)
    ? console.log(
      `🐸 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    )
    : console.log(
      `😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cd = { a: "2", b: "2" };
const dc = { b: "2", a: "1" };
assertObjectsEqual(cd, dc); // => false

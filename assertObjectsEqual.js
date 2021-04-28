const eqObjects = (obj1, obj2) => {
  const obj1KeysLength = Object.keys(obj1).length;
  const obj2KeysLength = Object.keys(obj2).length;

  if (obj1KeysLength !== obj2KeysLength) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  // const inspect = require("util").inspect;

  eqObjects(actual, expected)
    ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(eqObjects(ab, ba), true); // => true

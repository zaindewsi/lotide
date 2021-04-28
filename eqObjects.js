const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = (obj1, obj2) => {
  const obj1KeysLength = Object.keys(obj1).length;
  const obj2KeysLength = Object.keys(obj2).length;

  if (obj1KeysLength !== obj2KeysLength) {
    return false;
  }

  for (const key in obj1) {
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

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

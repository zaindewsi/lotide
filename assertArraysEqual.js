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

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`🐸 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`😡 Assertion Failed: ${arr1} !== ${arr2}`);
};

assertArraysEqual([1, 2, 3], [1, 3, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, "hello", 3], [1, 2, 3]);

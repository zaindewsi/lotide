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
    ? console.log(`🐸🐸🐸 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
};

const flatten = (array) => {
  const newArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i of item) {
        newArray.push(i);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

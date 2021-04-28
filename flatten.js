const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((item, i) => {
    return item === arr2[i];
  });
};
 
const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2) ?
    console.log(`🐸🐸🐸 Assertion Passed: ${arr1} === ${arr2}`) :
    console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
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

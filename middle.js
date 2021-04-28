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

const middle = (array) => {
  const newArray = [];
  if (array.length <= 2) {
    return newArray;
  } else if (array.length % 2 !== 0) {
    newArray.push(array[Math.floor(array.length / 2)]);
  } else if (array.length % 2 === 0) {
    newArray.push(array[(array.length / 2) - 1], array[array.length / 2]);
  }
  return newArray;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
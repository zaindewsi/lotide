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

const map = (arr, callback) => {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }
  return results;
};

//----------------------TESTS-----------------------------

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);

const nums = [1, 2, 3, 4, 5];
const results2 = map(nums, (num) => num * 2);
const results3 = map(nums, (num) => Math.pow(num, 3));

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]); //TRUE
assertArraysEqual(results2, [1, 4, 6, 8, 10]); //FALSE
assertArraysEqual(results3, [1, 8, 27, 64, 125]); //TRUE

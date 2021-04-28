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

const letterPositions = (str) => {
  const results = {};
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (results[str[i]]) {
        results[str[i]].push(i);
      } else {
        results[str[i]] = [i];
      }
    }
  }
  return results;
};

console.log(letterPositions("lighthouse labs"));
assertArraysEqual(letterPositions("lighthouse labs").g, [2]);

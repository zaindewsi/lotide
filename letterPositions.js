const eqArrays = (arr1, arr2) => {
  return (
    arr1.length === arr2.length &&
    arr1.every((item, i) => {
      return item === arr2[i];
    })
  );
};

const assertArraysEqual = (arr1, arr2) => {
  eqArrays(arr1, arr2)
    ? console.log(`🐸🐸🐸 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);
};

const letterPositions = function(str) {
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

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

const without = (source, itemsToRemove) => {
  let resultArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      resultArray.push(source[i]);
    }
  }
  return resultArray;
};


console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
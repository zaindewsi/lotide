const eqArrays = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((item, i) => {
     return item === arr2[i]})
 }
 
 const assertArraysEqual = (arr1, arr2) => {
 
  eqArrays(arr1, arr2) ? 
  console.log(`🐸🐸🐸 Assertion Passed: ${arr1} === ${arr2}`) : 
  console.log(`😡😡😡 Assertion Failed: ${arr1} !== ${arr2}`);

}

assertArraysEqual([1, 2, 3], [1, 3, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 'hello', 3], [1, 2, 3]);
const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`) : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (arr1, arr2) => {
 return arr1.length === arr2.length && arr1.every((item, i) => {
    return item === arr2[i]})
}


console.log(eqArrays([1], [1])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 4])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

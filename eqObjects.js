const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObject = (obj1, obj2) => {};

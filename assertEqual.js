const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡 Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);

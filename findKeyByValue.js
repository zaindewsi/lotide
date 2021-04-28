const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (object, value) => {
  const list = Object.keys(object);

  for (let item of list) {
    if (object[item] === value) {
      return item;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🐸🐸🐸 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(string) {
  const results = {};

  for (const letter of string) {
    if (letter !== " ")
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
  }
  return results;
};

console.log(assertEqual(countLetters("l h l"), { l: 2, h: 1 }));

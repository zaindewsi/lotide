const assertEqual = require("./assertEqual");

const findKey = (obj, cb) => {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

//--------------------------TESTS-----------------------------

const test = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
);

const test2 = findKey(
  {
    a: { num: 1 },
    b: { num: 2 },
    c: { num: 3 },
  },
  (x) => x.num === 2
);

const test3 = findKey(
  {
    a: { name: "zain" },
    b: { name: "bob" },
    c: { name: "joe" },
  },
  (x) => x.name === "joe"
);

assertEqual(test, "noma"); // PASS

assertEqual(test2, "c"); // FAIL

assertEqual(test3, "c"); // PASS

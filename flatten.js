const flatten = (array) => {
  const newArray = [];

  for (let item of array) {
    if (Array.isArray(item)) {
      for (let i of item) {
        newArray.push(i);
      }
    } else {
      newArray.push(item);
    }
  }
  return newArray;
};

module.exports = flatten;

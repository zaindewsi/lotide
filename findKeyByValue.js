const findKeyByValue = (object, value) => {
  const item = Object.keys(object);

  for (let key of item) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

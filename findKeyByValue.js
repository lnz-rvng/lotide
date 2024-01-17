const findKeyByValue = function(obj, value) {
  const object = Object.keys(obj);

  for (let key of object) {
    if (obj[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
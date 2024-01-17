const findKey = function(obj, callback) {
  const object = Object.keys(obj);

  if (typeof obj !== 'object' || obj === null) {
    return undefined;
  }

  for (let key of object) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

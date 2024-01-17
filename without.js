const without = function(array, remove) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== remove[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
};

module.exports = without;






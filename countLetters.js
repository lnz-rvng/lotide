const countLetters = function(str) {
  let result = {};

  for (let char of str) {
    console.log(char);

    if (result[char]) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }

  }
  
  return result;
};

module.exports = countLetters;
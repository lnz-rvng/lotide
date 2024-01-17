const middle = function(arr) {
  const middleArray = [];
  if (arr.length < 3) {
    return [];
  }

  if (arr.length % 2 === 1) {
    const midIndex = Math.floor(arr.length / 2);
    const midElements = arr[midIndex];
    middleArray.push(midElements);
  } else if (arr.length % 2 === 0) {
    const midIndex = arr.length / 2;
    const midElement1 = arr[midIndex - 1];
    const midElement2 = arr[midIndex];
    middleArray.push(midElement1, midElement2);
  }

  return middleArray;
};

module.exports = middle;
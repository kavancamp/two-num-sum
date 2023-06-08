function twoNumberSum(array, targetSum) {
  // Write your code here.
  let numbers = {};
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    let difference = targetSum - currentNum;
    if (numbers[difference] !== undefined) {
      return [currentNum, difference];
    }
    numbers[currentNum] = true;
  }
  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;

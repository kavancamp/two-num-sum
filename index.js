/*
write a function in JavaScript that takes in a non-empty array of distinct integers and an integer representing a target sum. if any two numbers in the input array sum up to the target sum, the function should return them in an array.
*/

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
/*
def twoNumberSum(array, targetSum){
  nums = {}
  for nums in array:
  if targetSum - num is num:
  return [targetSum - num, num, num]
  else: 
  nums[num] = true
}

*/

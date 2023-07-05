// 1 . Given an array of integers and a target value, you must determine which two integers' sum
// equals the target and return a 2D array. Then merge the array into a single array with sorting (
// ascending ) order, in the next step double the target value and find again the combination of
// digits (can be multiple digits ) that are equal to the double targeted value and returned into a 2D
// array.
// Sample Input : [1, 3, 2, 2, -4, -6, -2, 8];
// Target Value = 4,
// Output: First Combination For “4” : [ [1,3],[2,2],[-4,8],[-6,2] ];
// Merge Into a single Array : [-6,-4,1,2,2,2,3,8];
// Second Combination For “8” : [ [ 1,3,2,2], [8,-4,2,2],....,[n,n,n,n] ] 



function findCombinations(nums, target) {
  const seen = {};
  const result = [];

  // Find combinations that equal the target
  for (let num of nums) {
    const complement = target - num;
    if (seen[complement]) {
      const pairs = Array.from({ length: seen[complement] }, () => [num, complement]);
      result.push(...pairs);
    }

    seen[num] = (seen[num] || 0) + 1;
  }

  // Sort the array in ascending order
  const mergedArray = nums.sort((a, b) => a - b);

  // Double the target value
  const doubleTarget = target * 2;

  // Find combinations that equal the double target value
  const doubleResult = [];
  for (let i = 0; i < mergedArray.length; i++) {
    for (let j = i + 1; j < mergedArray.length; j++) {
      if (mergedArray[i] + mergedArray[j] === doubleTarget) {
        doubleResult.push([mergedArray[i], mergedArray[j]]);
      }
    }
  }

  return [result, mergedArray, doubleResult];
}

// Sample input
const nums = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

// Find combinations for target value
const [combinations, mergedArray, doubleCombinations] = findCombinations(nums, target);

// Print the output
console.log(`First Combination For ${target}:`, combinations);
console.log(`Merge Into a single Array:`, mergedArray);
console.log(`Second Combination For ${target * 2}:`, doubleCombinations);



//  output

// First Combination For 4: [ [ 1, 3 ], [ 2, 2 ], [ -4, 8 ], [ -6, 2 ] ]
// Merge Into a single Array: [ -6, -4, -2, 1, 2, 2, 3, 8 ]
// Second Combination For 8: [ [ 1, 3, 2, 2 ], [ 8, -4, 2, 2 ] ]

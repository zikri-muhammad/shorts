/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let uniquePointer = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[uniquePointer]) {
      uniquePointer++;
      nums[uniquePointer] = nums[i];
    }
  }
  return uniquePointer + 1;
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
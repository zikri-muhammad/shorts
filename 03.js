/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right]
            right--
        } else {
            left++
        }
    }

    return left
};

console.log(removeElement([0,1,1,1], 1))
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.length = m
    nums2.length = n
    return [...nums1, ...nums2].sort()
    for(let i=m;i<m+n; i++){
        nums1[i] = nums2[i-m];
    }
    nums1.sort((a, b) => a-b);
}; 



console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))
console.log(merge([0], 0, [1], 1))
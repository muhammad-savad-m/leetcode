/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let x = nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length / 2)]
};
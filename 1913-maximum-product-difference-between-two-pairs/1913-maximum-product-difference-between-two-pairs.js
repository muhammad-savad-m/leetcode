var maxProductDifference = function(nums) {
    nums.sort((a, b) => a - b);

    let smallest = nums[0] * nums[1];
    let largest = nums[nums.length - 1] * nums[nums.length - 2];

    return largest - smallest;
};
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let x= nums.filter((a)=>a!==0)
    let y= nums.filter((a)=>a===0)
    let res=x.concat(y)
    for(let i=0;i<nums.length;i++){
        nums[i]=res[i]
    }
};
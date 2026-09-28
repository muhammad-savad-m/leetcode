/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for(let key of nums){
        if(nums.indexOf(key)===nums.lastIndexOf(key)){
            return key
        }
    }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let x=[]
    for(let key of nums){
        if(nums.indexOf(key)===nums.lastIndexOf(key)){
            x.push(key)
        }
        
    }
    return x.reduce((a,b)=>a+b,0)
};
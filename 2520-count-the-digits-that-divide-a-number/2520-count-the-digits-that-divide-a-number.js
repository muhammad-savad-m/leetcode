/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count =0
    let nums=num.toString()
    
    for(let i =0;i<nums.length;i++){
        let digit= Number(nums[i])
      if(num%digit===0){
        count++
      }

    }
    return count
};
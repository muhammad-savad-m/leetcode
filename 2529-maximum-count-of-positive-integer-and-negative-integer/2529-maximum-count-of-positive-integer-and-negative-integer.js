/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let x = 0
    let y = 0
    for(let key of nums){
        if(key <0){
            x++
        }
        if(key >0)
        y++
    }
    if(x>y){
        return x
    }
    if(y>x){
        return y
    }
    if(x===y){
        return x
    }
};
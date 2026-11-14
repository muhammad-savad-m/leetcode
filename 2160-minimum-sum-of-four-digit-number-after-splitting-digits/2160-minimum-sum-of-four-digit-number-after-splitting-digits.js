/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let x = num.toString().split("").sort((a,b)=>a-b)
return Number(x[0]+x[2])+Number(x[1]+x[3])

};
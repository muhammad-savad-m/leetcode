/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let x= n.toString().split("").map(Number).reduce((a,b)=>a*b,1)
    let y= n.toString().split("").map(Number).reduce((a,b)=>a+b,0)
    return x-y
};
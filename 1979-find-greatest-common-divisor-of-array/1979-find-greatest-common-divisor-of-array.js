/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let a=Math.min(...nums)
    let b=Math.max(...nums)
    function gcd(a, b) {
    while (b !== 0) {
        let remainder = a % b;
        a = b;
        b = remainder;
    }

    return a;
}
return gcd(a,b)
}
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let x = n;

    while (x>0&&x % 3 === 0) {
        x = x / 3;
    }

    return x === 1;
};
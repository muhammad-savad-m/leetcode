/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) return false;

    let po = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            po.push(i);
        }
    }

    if (po.length === 0) return true;

    if (po.length === 2) {
        let a = po[0];
        let b = po[1];

        return s1[a] === s2[b] && s1[b] === s2[a];
    }

    return false;
};
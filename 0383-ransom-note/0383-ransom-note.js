/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let x= ransomNote.split("").sort().join("")
    let y= magazine.split("").sort().join("")
    for (let i = 0; i < x.length; i++) {
        if (y.includes(x[i])) {
            y = y.replace(x[i], "");
        } else {
            return false;
        }
    }

    return true;
};
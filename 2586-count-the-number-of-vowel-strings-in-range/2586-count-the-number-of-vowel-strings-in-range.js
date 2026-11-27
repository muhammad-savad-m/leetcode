/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0;
    let vowels = "aeiou";

    for (let i = left; i <= right; i++) {
        let first = words[i][0];
        let last = words[i][words[i].length - 1];

        if (vowels.includes(first) && vowels.includes(last)) {
            count++;
        }
    }

    return count;
};
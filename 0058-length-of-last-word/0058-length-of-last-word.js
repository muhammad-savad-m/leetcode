/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let Word= s.trim().split(" ")
    let lastWord=Word.at(-1)
    return lastWord.length
};
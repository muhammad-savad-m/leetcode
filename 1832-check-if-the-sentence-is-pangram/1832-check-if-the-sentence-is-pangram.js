/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let a= "abcdefghijklmnopqrstuvwxyz"
    for (let i=0;i<a.length;i++){
        if(!sentence.includes(a[i])){
            return false
        }
    }
    return true
};
/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    for(let i = 1;i<s.length;i++){
        for(let j=0;j<i;j++){
            if(s[i]===s[j]){
                return s[i]
            }
        }
    }
};
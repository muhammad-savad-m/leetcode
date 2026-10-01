/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let j=[]
    let x=s.split("")
    for(let k of x){
        j.push(x.filter(x=>x===k).length)
        }
        for(let i =0;i<j.length;i++){
    if(j[i]!==j[0]){
        return false
    
    }
        }
    return true
};
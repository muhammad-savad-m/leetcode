/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let res=0
    let x= n.toString().split("")
    for(let i=0;i<x.length;i++){
        if(i%2===0){
            res+=Number(x[i])
        }
        if(i%2!==0){
            res-=Number(x[i])
        }
        }
    return res

    }

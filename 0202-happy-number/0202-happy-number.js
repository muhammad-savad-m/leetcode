/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let x=n
    let seen= new Set()
    while(x!==1){
        if(seen.has(x)){
            return false
        }
        seen.add(x)
        x=x.toString().split('').reduce((a,b)=>a+(b**2),0)

    }
    return true
}
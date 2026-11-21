/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
   let x= n*2
   let y= n*3
   let xyn= (n.toString()+x.toString()+y.toString()).split("").sort((a,b)=>a-b).join("")
   let abc= "123456789"
   if(xyn===abc){
    return true
   }else{
    return false
   }
};
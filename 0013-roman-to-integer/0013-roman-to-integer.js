/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let e= s.split("")
    let j=[]
for(let key of e){
    if(key==="I"){
j.push(1)
    }else if(key==="V"){
        j.push(5)

    }else if(key==="X"){
        j.push(10)
    }else if(key==="L"){
        j.push(50)
    }else if(key==="C"){
        j.push(100)
    }else if(key==="D"){
        j.push(500)
    }else if(key==="M"){
        j.push(1000)
    }
     
}
 let total = 0;

  for (let i = 0; i < j.length; i++) {
    if (j[i] < j[i + 1]) {
      total -= j[i];
    } else {
      total += j[i];
    }
  }

  return total;

}
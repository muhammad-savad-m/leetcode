/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num=0
    for(let key of operations){
        if(key==="--X"||key==="X--"){
            num-=1
        }else if(key==="X++"||key==="++X"){
            num+=1
        }
    }
    return num
};
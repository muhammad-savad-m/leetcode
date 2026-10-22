/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let highest=0
    for(let key of sentences){
       if(key.split(" ").length>highest){
        highest= key.split(" ").length
       }
    }
    return highest
};
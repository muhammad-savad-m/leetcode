var sortSentence = function(s) {
    let words = s.split(" ");
    let result = [];

    for (let word of words) {
        let position = Number(word[word.length - 1]);
        let actualWord = word.slice(0, -1);

        result[position - 1] = actualWord;
    }

    return result.join(" ");
};
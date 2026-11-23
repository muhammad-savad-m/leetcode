/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let sorted = [...heights].sort((a, b) => b - a);
    let result = [];

    for (let height of sorted) {
        let index = heights.indexOf(height);
        result.push(names[index]);
    }

    return result;
};
var squareIsWhite = function(coordinates) {
    let letter = coordinates[0];
    let number = Number(coordinates[1]);

    let charCode = letter.charCodeAt(0);

    return (charCode + number) % 2 !== 0;
};
"use strict";
const spiralOrder = (matrix) => {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let rowStart = 0;
    let rowEnd = rows - 1;
    let colStart = 0;
    let colEnd = cols - 1;
    const result = [];
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let col = colStart; col <= colEnd; col++) {
            result.push(matrix[rowStart][col]);
        }
        rowStart++;
        for (let row = rowStart; row <= rowEnd; row++) {
            result.push(matrix[row][colEnd]);
        }
        colEnd--;
        if (rowStart <= rowEnd) {
            for (let col = colEnd; col >= colStart; col--) {
                result.push(matrix[rowEnd][col]);
            }
            rowEnd--;
        }
        if (colStart <= colEnd) {
            for (let row = rowEnd; row >= rowStart; row--) {
                result.push(matrix[row][colStart]);
            }
            colStart++;
        }
    }
    return result;
};
const result = spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.log(result);

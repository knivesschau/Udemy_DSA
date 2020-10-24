// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    // first attempt (this was hard!!!!)
    let matrix = [];

    for (let i = 0; i < n; i++) {
        matrix.push([]);
    }

    let counter = 1;
    let firstColumn = 0;
    let lastColumn = n - 1;
    let firstRow = 0; 
    let lastRow = n - 1;  

    while (firstColumn <= lastColumn && firstRow <= lastRow) {
        for (let i = firstColumn; i <= lastColumn; i++) { // top row of matrix 
            matrix[firstRow][i] = counter; 
            counter++; 
        }
        firstRow++; 

        for (let i = firstRow; i <= lastRow; i++) { // right column of matrix 
            matrix[i][lastColumn] = counter; 
            counter++;
        }
        lastColumn--; 

        for (let i = lastColumn; i >= firstColumn; i--) { // bottom row of matrix
            matrix[lastRow][i] = counter; 
            counter++;
        }
        lastRow--; 

        for (let i = lastRow; i >= firstRow; i--) { // starting column of matrix 
            matrix[i][firstColumn] = counter;
            counter++;
        }
        firstColumn++; 
    }
    return matrix;
}

module.exports = matrix;

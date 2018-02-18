var Sudoku = require('../js/sudoku.js').sudokuModule;
var board = [
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9]
];
var sudoku = new Sudoku();

describe('Sudoku functions', function() {

    it('should make sure there are no repeats in an array of 9 numbers.', function() {
        var inValidLine = [1,2,3,4,4,5,6,7,8];
        var validLine = [1,2,3,4,5,6,7,8,9];

        expect(sudoku.lineIsValid(inValidLine)).toBe(false)
        expect(sudoku.lineIsValid(validLine)).toBe(true)
    });

    it('should check to see if an entire board is valid', function() {
        var validBoard = [
            [1,2,3,4,5,6,7,8,9],
            [2,3,4,5,6,7,8,9,1],
            [3,4,5,6,7,8,9,1,2],
            [4,5,6,7,8,9,1,2,3],
            [5,6,7,8,9,1,2,3,4],
            [6,7,8,9,1,2,3,4,5],
            [7,8,9,1,2,3,4,5,6],
            [8,9,1,2,3,4,5,6,7],
            [9,1,2,3,4,5,6,7,8]
        ];

        var invalidBoard = [
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9]
        ];

        expect(sudoku.boardIsValid(validBoard)).toBe(true);
        expect(sudoku.boardIsValid(invalidBoard)).toBe(false);
    });
});

describe('columnsToLines()', function() {
    it ('should convert array of rows into an array of columns', function() {
        var rows = [
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9],
            [1,2,3,4,5,6,7,8,9]
        ];
        var columns = [
            [1,1,1,1,1,1,1,1,1],
            [2,2,2,2,2,2,2,2,2],
            [3,3,3,3,3,3,3,3,3],
            [4,4,4,4,4,4,4,4,4],
            [5,5,5,5,5,5,5,5,5],
            [6,6,6,6,6,6,6,6,6],
            [7,7,7,7,7,7,7,7,7],
            [8,8,8,8,8,8,8,8,8],
            [9,9,9,9,9,9,9,9,9]
        ];

        expect(sudoku.convertRowsToColumns(rows)).toEqual(columns);
    })
})
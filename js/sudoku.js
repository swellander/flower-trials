function Sudoku(board) {
    this.board = board;
};

Sudoku.prototype.lineIsValid = function(line) {
    var objRecord = {};
    var isValid = true;
    line.forEach(function(num) {
        if (objRecord.hasOwnProperty(num)) {
            isValid = false;
        } else {
            objRecord[num] = 1;
        }
    })
    return isValid;

}

Sudoku.prototype.convertRowsToColumns = function(rows) {
    //forEach row in rows (w/ index)
      //for loop to 9 (var i)
        //push rows[i][index]
    var columns = [];


    rows.forEach(function(row, index) {
        var column = [];
        for (i = 0; i < 9; i ++) {
            column.push(rows[i][index]);
        }
        columns.push(column);
    });

    return columns;
}

Sudoku.prototype.boardIsValid = function(board) {
    var isValid = true;
    var placeHolder = this;




    board.forEach(function(row) {
        if (!placeHolder.lineIsValid(row)) {
            isValid = false;
        }
    });

    board = this.convertRowsToColumns(board);

    board.forEach(function(column) {
        if (!placeHolder.lineIsValid(column)) {
            isValid = false;
        }
    });

    return isValid;
}





exports.sudokuModule = Sudoku;
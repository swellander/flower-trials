describe('Sudoku functions', function() {
    it('should make sure there are no repeats in an array of 9 numbers.', function() {
        var repeatArr = [1,2,3,4,4,5,6,7,8];
        var nonRepeatArr = [1,2,3,4,5,6,7,8,9];

        expect(lineIsValid(repeatArr)).toBe(false)
        expect(lineIsValid(nonRepeatArr)).toBe(true)
    })
})
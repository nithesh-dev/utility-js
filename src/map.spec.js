const map = require("./map");

describe("Testing map", () => {

    it('checking cube function', () => {
        var array = [1, 2, 3];
        expect(map(array, cube)).toEqual([1, 8, 27]);
    });

    it('checking cube function', () => {
        var array = [];
        expect(map(array, cube)).toEqual([]);
    });

    it('checking identity function', () => {
        var array = [1, 1, 1];
        expect(map(array, identity)).toEqual([1]);
    });

    it('checking identity function', () => {
        var array = [];
        expect(map(array, identity)).toEqual([]);
    });


    it('checking random function', () => {
        var array = [{ x: 10}];
        expect(map(array, myFunction)).toEqual([11]);
    })

})
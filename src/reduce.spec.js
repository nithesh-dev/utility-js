const reduce = require("./reduce");

describe("Testing reduce", () => {

    it("properly working reduce test 1", () => {
        var array = ['a', 'b', 'c'];
        expect(reduce(array, (x, y) => x + y)).toEqual('abc');
    })

    it("properly working reduce test 2", () => {
        var array = [];
        expect(reduce(array, (x, y) => x + y)).toEqual(undefined);
    })

    it("properly working reduce test 3", () => {
        var array = ['a', 'b', 'c'];
        expect(reduce(array, (x, y) => x + y, 'z')).toEqual('zabc');
    })

})
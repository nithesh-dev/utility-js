const filter = require("./filter");

describe("Testing filter", () => {

    it("properly outputs for empty list", () => {
        var array = [];
        expect(filter(array, num => true)).toEqual([]);
    })

    it("properly outputs for non-empty lists", () => {
        var array = [1, 2, 3];
        expect(filter(array, num => false)).toEqual([]);
    })

    it("properly outputs based on condition", () => {
        var array = [1, 2, 3];
        expect(filter(array, x => x > 1)).toEqual([2, 3]);
    })

    it("properly outputs filtering uppercase", () => {
        var array = ['a', 'B', 'c', 'D'];
        expect(filter(array, filterUpperCase)).toEqual(['B', 'D']);
    })
})
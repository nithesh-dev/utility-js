const max = require("./max");

describe("Testing max", () => {

    it("properly displays max value", () => {
        var array = [1, 2, 7, 4, 3];
        expect(max(array)).toBe(7);
    })


    it("properly displays for empty list", () => {
        var array = [];
        expect(max(array)).toEqual([]);
    })

})
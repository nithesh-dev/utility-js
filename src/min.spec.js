const min = require("./min");

describe("Testing min", () => {

    it("properly displays for empty list", () => {
        var array = [];
        expect(min(array)).toEqual([]);
    })

    it("properly displays min value", () => {
        var array = [1, 2, 7, 4, 3];
        expect(min(array)).toBe(1);
    })

})
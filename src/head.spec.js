const head = require("./head");

describe('Head', () => {

    it('Fetching head value', () => {
        var array = [1, 2, 3];
        expect(head(array)).toBe(1);
    });

    it('Results null if empty', () => {
        var array = [];
        expect(head(array)).toEqual(undefined);
    })
})
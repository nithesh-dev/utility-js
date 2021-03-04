const tail = require("./tail");

describe('Tail', () => {

    it('Properly outputs last value of array', () => {
        var array = [1, 2, 3];
        expect(tail(array)).toEqual([2, 3]);
     });

     it('Properly outputs array is empty', () => {
         var array = [];
         expect(tail(array)).toEqual([]);
     });

})
const expect = require('chai').expect;
const fizzbuzz = require('../fizzBuzzer');
describe('fizzbuzz', function() {
    it('should be divisible by 3, 5 and/or 15', function() {
        const normalCase = [
          {num: 6, expected: 'fizz'},
          {num: 10, expected: 'buzz'},
          {num: 45, expected: 'fizz-buzz'}  
        ];
        normalCase.forEach(function(input) {
            const answer = fizzbuzz(input.num);
            expect(answer).to.equal(input.expected);
        });
    });

    it('should raise error if arg is not a number', function() {
        const badInputs = ['a', false, 'three', '3'];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzbuzz(input[0]);
            }).to.throw(Error);
        });
    });
});
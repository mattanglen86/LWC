import { sum } from '../sum';
//takes in a string to describe the test, and a callback function
describe('sum()', () => {
    //this is the test itself "it" is an alias
    //expect is the actual method and toBe is what we expect
    //ie System.assertEquals(".toBe", "expect(method())")
    it('should add 1 and 2 returning 3', () => {
        expect(sum(1,2)).toBe(3);
    });
});
/**
 * Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).


 */

function isTriangle(a,b,c) {
    // grab the sum of all three parameters
    // iterate through each parameter's difference of the sum
    // condition of each loop: if the difference is greater than the element, then do nothing
    const sum = a + b + c;
    const array = [a, b, c];
    const fail = array.filter(num => !((sum - num) > num));
    return fail.length > 0 ? false : true
};

console.log(isTriangle(1,2,2))
/**
 * const { assert } = require("chai")

describe("Public tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(isTriangle(1,2,2), true);
    assert.strictEqual(isTriangle(7,2,2), false);
  });
})
 */
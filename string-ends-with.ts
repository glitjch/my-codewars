/**
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

 */

function solution(str: string, ending: string): boolean {
  const strEnding = str.slice(str.length - ending.length);
  return strEnding === ending ? true : false;
};


console.log(solution('abcde', ''))
/**
 * import solution = require('./solution');
// import the type of assertion library you wish to use (Chai recommended)
import {assert} from "chai";

describe("Sample Test Cases", function(){
  it("Should return true or false", function() {
    assert.equal(solution.solution('abcde', 'cde'), true);
    assert.equal(solution.solution('abcde', 'abc'), false);
    assert.equal(solution.solution('abc', ''), true);
  });
});
 */
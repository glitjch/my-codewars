/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
FUNDAMENTALSNUMBERS
 */
function persistence(num, count = 0) {
  if (num.toString().length === 1) {
    return count;
  } 

  const numArr = num.toString().split("");
  const persistInstance = numArr.reduce((acc,cur) => {
    return acc * cur;
  }, 1);

  const numberOfDigits = persistInstance.toString().length;
  if (numberOfDigits !== 1) {
    return persistence(persistInstance, count += 1);
  }
  count++
  return count;

};

console.log(persistence(4))
/**
 * const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Persistent Bugger.", () => {
  it("Fixed tests", () => {
    assert.strictEqual(persistence(39),3);
    assert.strictEqual(persistence(4),0);
    assert.strictEqual(persistence(25),2);
    assert.strictEqual(persistence(999),4);
  });
 */
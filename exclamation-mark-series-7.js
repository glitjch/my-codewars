/**
 * Description:
Remove words from the sentence if they contain exactly one exclamation mark. Words are separated by a single space, without leading/trailing spaces.

Examples
remove("Hi!") === ""
remove("Hi! Hi!") === ""
remove("Hi! Hi! Hi!") === ""
remove("Hi Hi! Hi!") === "Hi"
remove("Hi! !Hi Hi!") === ""
remove("Hi! Hi!! Hi!") === "Hi!!"
remove("Hi! !Hi! Hi!") === "!Hi!"

 */

function remove (string) {
  // declare a regex condition with !
  const regex1 = /!{1}/
  const regex2 = /!{2,}/;
  // convert into an array
  const wordsArr = string.split(" ");
  // filter out appropriate elements
  return wordsArr.filter(word => 
    !(word.includes("!")) || 
    !regex1.match(word) || 
    regex2.match(word)
    ).join(" ");
}

console.log(remove("Hi! !Hi! Hi!"))
/**
 * const strictEqual = require("chai").assert.strictEqual;

function doTest(input, expected) {
	const actual = remove(input);
	strictEqual(actual, expected, `for string:\n"${input}"\n`);
}

describe("Basic Tests", function () {
	it("It should works for basic tests", function () {
		doTest("Hi!", "");
		doTest("Hi! Hi!", "");
		doTest("Hi! Hi! Hi!", "");
		doTest("Hi Hi! Hi!", "Hi");
		doTest("Hi! !Hi Hi!", "");
		doTest("Hi! Hi!! Hi!", "Hi!!");
		doTest("Hi! !Hi! Hi!", "!Hi!");
	});
});
 */
/**
 * If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
 */

// function incrementString (string) {
//   let lastChar = string[string.length -1];
//   let test = Number(lastChar) 
//   if (isNaN(test)) {
//     return `${string}1`;
//   } 
//   let replaceLastWith = +lastChar + 1
//   let replacedString = string.replace(lastChar, replaceLastWith);
//   let differenceInLength = replacedString.length > string.length;
//   if (differenceInLength) {

//   }
// }

// TODO

function incrementString (string) {
  let lastChar = string[string.length -1];
  let test = Number(lastChar) 
  if (isNaN(test)) {
    return `${string}1`;
  } 
  let getNums = string.split("").filter(char => !isNaN(Number(char))).join("")
  let numOfDigits = getNums;
  console.log(getNums);
  let replaceLastWith = +lastChar + 1

  return string.replace(lastChar, replaceLastWith);
}

console.log(incrementString("foobar009"))
/**
 * describe("Tests", () => {
  it("test", () => {
Test.assertEquals(incrementString("foobar000"), "foobar001");
Test.assertEquals(incrementString("foo"), "foo1");
Test.assertEquals(incrementString("foobar001"), "foobar002");
Test.assertEquals(incrementString("foobar99"), "foobar100");
Test.assertEquals(incrementString("foobar099"), "foobar100");
Test.assertEquals(incrementString(""), "1");
  });
});

 */
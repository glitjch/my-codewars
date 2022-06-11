/**
 * Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
STRINGSFORMATTINGFUNDAMENTALS
 */

// complete the function

// research uppercase unicode values
// convert given string into array
// loop through the array to find uppercase value
// splice in space prior to uppercase letter.
function solution(string) {
  const arr = string.split("");
  const regex = /[A-Z]/;
  for (let i = 0; i < arr.length; i++) {
    if (regex.test(arr[i])) {
      arr.splice(i, 0, " ");
      i++;
    }
  }
  return arr.join("");
}

console.log(solution('camelCasing'))
/**
 * describe("Tests", () => {
  it("test", () => {
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')

});
});

 */
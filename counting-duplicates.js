/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/


function duplicateCount(text){
  let count = 0;
  if (text) {
    const originalTextLowerCase = text.toLowerCase().split("")
    const uniqueList = originalTextLowerCase.filter((letter, index, self) => {
      return self.indexOf(letter) === index;
    })
    for (const letter of uniqueList) {
      let letterIndex = originalTextLowerCase.indexOf(letter)
      if (originalTextLowerCase.indexOf(letter, letterIndex +1) > 0) {
        count++
      }
    }

  }
  return count;
}

console.log(duplicateCount("Indivisibilities"))
// Test.assertEquals(duplicateCount("aabBcde"), 2,"should ignore case");
// Test.assertEquals(duplicateCount("Indivisibility"), 1)
// Test.assertEquals(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
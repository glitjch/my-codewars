/**
 * There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.


 */

const recoverSecret = function(triplets) {
  const stringConcat = triplets.join("").split(",").join("");
  const [...uniqueSet] = new Set(stringConcat);
  
  let indexCount = 0;
  let secretString = "";

  // iterate through each letter
  uniqueSet.forEach(letter => {
    // Track letter index, because if it is anything else before 0, then it CANNOT be the first letter
    let highestIndexOfLetter = 0;

    // Iterate each triplet with the one given letter
    triplets.forEach(triplet => {

      // Check only triplets containing that letter
      if (triplet.includes(letter)) {
        // Iterate each element in triplet
        for (let i = 0; i < 3; i++){
          // Check if the letter exists after index 0
          if (i > highestIndexOfLetter && triplet[i] === letter) highestIndexOfLetter++
        }
      }  
    })
    
    // if the letter is only found in index 0 it is the first letter!  
    if (highestIndexOfLetter === 0) {
      secretString += letter;
      indexCount++;
    }
    // console.log(letter, included)
  })
  return secretString;
}


// retrieve all the unique letters
// retrieve the length of the secret string
// for each unique letter, boolean each triplet to compare if 1. there is a letter before it within the triplet, and 2. if yes, is that previous letter one index below the current?
// if there is no letter preceding, assign that letter to index 0, as the first letter.
// if there is a preceding letter, and that preceding letter matches the index count, assign the unique letter with the index +1 and increase index count.

console.log(recoverSecret(
  [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
  ]
))
/**
 * describe("Tests", () => {
  it("test", () => {
secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

Test.assertEquals(recoverSecret(triplets1), secret1)
  });
});

 */
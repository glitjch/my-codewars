/**
 * There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.


 */

const recoverSecret = function(triplets) {
  let secretString = "";
  const stringConcat = triplets.join("").split(",").join("");
  const [...uniqueSet] = new Set(stringConcat);

  // iterate uniqueSet to address random order of letters
  for (let secret = 0; secret < uniqueSet.length; secret++) {
    uniqueSet.forEach(letter => {
      let firstLetter = true;
      let previousLetters = [];

      // Iterate each triplet with the one given letter
      triplets.forEach(triplet => {
        if (triplet.includes(letter)) {
          for (let i = 0; i < 3; i++){
            if (i > 0 && triplet[i] === letter) {
              firstLetter = false;
              previousLetters.push(triplet[i -1])
            }
          }
        } 
      });
      
      // Determines which preceding letters are already in secret string
      const hasLettersInSecretStr = previousLetters.filter(prev => secretString.includes(prev));
      
      if (!secretString.includes(letter)) {
        // Letter found only at index 0 is the first letter!  
        if (firstLetter) return secretString += letter;
        // Letter, whose previous letters are ALL included in secret string, is the next letter.
        if (previousLetters.length === hasLettersInSecretStr.length ) secretString += letter;
      }
    });
  };
  
  return secretString;
};


// retrieve all the unique letters
// retrieve the length of the secret string
// for each unique letter, boolean each triplet to compare if 1. there is a letter before it within the triplet, and 2. if yes, is that previous letter one index below the current?
// if there is no letter preceding, assign that letter to index 0, as the first letter.
// if there is a preceding letter, and that preceding letter matches the index count, assign the unique letter with the index +1 and increase index count.

  // ['t', 'u', 'p','w', 'h', 'i', 's', 'a']

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
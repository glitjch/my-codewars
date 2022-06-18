/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
 */

function rot13(message){
  let ciphered = "";
  let index = 0;
  for (let char of message) {
      let value = message.charCodeAt(index);
      index++;
      if ( (value > 64 && value <= 77) || (value > 96 && value <= 109) ) {
        ciphered += String.fromCharCode(value + 13);
        continue;
      }
      if ( (value > 77 && value < 91) || (value > 109 && value < 123) ) {
        ciphered += String.fromCharCode(value -13);
        continue;
      } 
      ciphered += char;
  }
  return ciphered;
};
// Test => 84 101 115 116
// Test => 71 114 102 103

console.log(rot13("Test"));
/**
 * describe("Rot13", function(){
  it("test", function(){
    Test.expect("grfg" == rot13("test"), "Input: test , Expected Output: grfg , Actual Output: " + rot13("test"))
  })    
  it("Test", function(){
    Test.expect("Grfg" == rot13("Test"), "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test"))    
  })
})
 */
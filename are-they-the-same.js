/**
 * Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 36100 is not the square of any number of a.

Remarks
a or b might be [] or {} (all languages except R, Shell).
a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

Note for C
The two arrays have the same size (> 0) given as parameter in function comp.

Instructions:
1. Note that each element can only be matched once if true, in case there are repeated numbers. Therefore, fn should return false if there aren't enough matching pairs.
2. Sort each array. This will help with matching the same index, as both arrays are always equal length
3. Handle null by returning false at the beginning
4. Iterate. Using a for loop as the index matters. Can use nested loops too
5. Declare that if the two elements from each array sharing same index does not match return false
6. If there is no false, automatically return true
 */
// we'll need to iterate each of b and compare to each of a if it is a square root of any

function comp(array1, array2){
  if (array1 === null || array2 === null) return false;
  for (let num = 0; num < array2.length; num++) {
    if ( Math.sqrt(array2.sort((a, b) => a - b)[num]) !== array1.sort((a, b) => a - b)[num] ) return false
  } 
  return true;
}
// console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))
console.log(comp( 
  [8, 10, 3, 10, 1, 5, 2, 0, 1, 4, 5, 2, 6, 9, 3], 
  [4, 4, 1, 9, 1, 36, 100, 16, 1, 81, 100, 9, 25, 25, 64]))
/**
 * describe("Tests", () => {
  it("test", () => {
a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
Test.assertEquals(comp(a1, a2), true);
  });
});

 */
/**
 * Build Tower
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Go challenge Build Tower Advanced once you have finished this :)


 */

function towerBuilder(nFloors) {
  let result = [];
  for (let floor = 1; floor <= nFloors; floor++ ) {
    let maxLength = " ".repeat(nFloors * 2 - 1).split("");
    const floorLength = floor * 2 - 1;
    const startingPoint = nFloors - floor;
    maxLength.splice(startingPoint, floorLength, "*".repeat(floorLength));
    result.push(maxLength.join(""));
  }
  return result; 
}

console.log(towerBuilder(5));
/**
 * describe("Tests", () => {
  it("test", () => {
Test.assertDeepEquals(towerBuilder(1), ["*"]);
Test.assertDeepEquals(towerBuilder(2), [" * ","***"]);
Test.assertDeepEquals(towerBuilder(3), ["  *  "," *** ","*****"]);
  });
});

 */

/**
 * 
 // expected 
 [ '   *   ', '  ***  ', ' *****', '*******' ] to deeply equal 
 [ '   *   ', '  ***  ', ' ***** ', '*******' ]
 [ '    *    ', '   ***   ', '  *****', ' *******', '*********' ]
 */
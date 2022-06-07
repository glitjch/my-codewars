/**
 * Build Tower Advanced
Build Tower by the following given arguments:
number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))

Tower block unit is represented as *

Python: return a list;
JavaScript: returns an Array;
Have fun!

for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below
2 + 4 starts at index 10
6 + 4 starts at index 8
10 + 4 starts at index 6
14 + 4 4
18 + 4 2
22 0

hypoth1 = (floors -1) * sizew * 2 + sizew

(2, 2)
2 + 0
2 + 4
6 + 0
6 + 4
10 + 0
10 + 4
...

ex1 4 (3, 1) max length would be 21
3 1234512345 6 1234512345
9
15
21



[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]

starting point hypoth1
maxfloor x width - width
6 * 2 - (2 * nth floor)
6 * 2 - (2 * 1) = 10
6 * 2 - (2 * 2) = 8
6 * 2 - (2 * 3) = 6
6 * 2 - (2 * 4) = 4
6 * 2 - (2 * 5) = 2
6 * 2 - (2 * 6) = 0
 */
// let's figure out constants...the maximum length aka the base length
// What's different from the prev fn is the repeated stacks per floor reflected by height or nblockz[1]
// we'll need to recalculate starting point and floor length
// starting location is influenced by length of block size

function towerBuilder(nFloors, nBlockSz) {
  const width = nBlockSz[0];
  const length = nBlockSz[1];
  const base = (nFloors - 1) * width * 2 + width;
  let result = [];
  for (let floor = 1; floor <= nFloors; floor++ ) {
    let maxLength = " ".repeat(base).split("");
    const floorLength = width + (width * 2 * (floor - 1));
    const startingPoint = nFloors * width - (width * floor);
    maxLength.splice(startingPoint, floorLength, "*".repeat(floorLength));
    const prepArr = [];
    for (let repeat = 0; repeat < length; repeat++) {
      prepArr.push(maxLength.join(""));
    }
    result.push(...prepArr);
  }
  return result; 
};

console.log(towerBuilder(3, [4, 2]));

/**
 * describe("Tests", () => {
  it("test", () => {
Test.assertEquals(JSON.stringify(towerBuilder(1, [1, 1])), JSON.stringify(["*"]));
Test.assertEquals(JSON.stringify(towerBuilder(3, [4, 2])), JSON.stringify(['        ****        ', '        ****        ', '    ************    ', '    ************    ', '********************', '********************']));
  });
});

expected 
'["        ****        ","    ************    ","********************"]' to equal 
'["        ****        ","        ****        ","    ************    ","    ************    ","********************","********************"]'≈
 */
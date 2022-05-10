/**
 * Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
 */

function XO(str) {
  const array = str.toLowerCase().split("");
  const exes = array.filter(e => e === "x");
  const ohs = array.filter(e => e === "o");
  return exes.length === ohs.length ? true : false;
};

/**
 * describe("Tests", () => {
  it("test", () => {
Test.assertEquals(XO('xo'),true);
Test.assertEquals(XO("xxOo"),true);
Test.assertEquals(XO("xxxm"),false);
Test.assertEquals(XO("Oo"),false);
Test.assertEquals(XO("ooom"),false);
  });
});

 */
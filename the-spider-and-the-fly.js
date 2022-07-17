/**
 * Web Coordinates
As you can see, each point where the rings and the radials intersect can be described by a "web coordinate".

So in this example the spider is at H3 and the fly is at E2

Kata Task
Our friendly jumping spider is resting and minding his own spidery business at web-coordinate spider.

An inattentive fly bumbles into the web at web-coordinate fly and gets itself stuck.

Your task is to calculate and return the distance the spider must jump to get to the fly.

Example
The solution to the scenario described by the picture is 4.63522

Notes
The centre of the web will always be referred to as A0
The rings intersect the radials at evenly spaced distances of 1 unit

 */
// law of cosine c^2 = a^2 + b^2 - 2abcosC

const spiderToFly = function(spider, fly) {  
const letterDistance =  Math.abs(spider.split("").shift().charCodeAt(0) - fly.split("").shift().charCodeAt(0));
const a = Number(spider.split("").pop());
const b = Number(fly.split("").pop());
let degree = letterDistance * 45;


if (letterDistance === 0) return Math.abs(a - b);
if (degree === 180 ) return Math.abs(a + b);
if (degree > 180 ) {
  degree = 360 - degree;
}

const radians = degree * Math.PI / 180;
console.log(letterDistance, degree, radians, a, b)
const side = Math.sqrt( Math.pow(a, 2) + Math.pow(b, 2) - ( 2 * a * b * Math.cos(radians) ))
return side.toFixed(5);
}

console.log(spiderToFly("C4", "H2"))

/**
 * describe("SolutionTests", function() {

  const approxEquals = function(actual, expected, delta=1e-3) {
    Test.expect(Math.abs(actual - expected) < delta, `got ${actual} when expecting ${expected}`);
  }
  
  // ----------
  
  it("example", function() {
    approxEquals(spiderToFly("H3", "E2"), 4.63522);
  });

  it("same", function() {
    approxEquals(spiderToFly("C2", "C2"), 0);
    approxEquals(spiderToFly("A0", "A0"), 0);
    approxEquals(spiderToFly("F3", "F3"), 0);
  });

  it("radial-out", function() {
    approxEquals(spiderToFly("H1", "H2"), 1);
    approxEquals(spiderToFly("H1", "H4"), 3);
  });

  it("radial-thru-the-middle", function() {
    approxEquals(spiderToFly("G4", "C4"), 8);
    approxEquals(spiderToFly("G4", "C3"), 7);
  });

});

 */
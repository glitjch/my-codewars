/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
FUNDAMENTALSPARSINGALGORITHMSSTRINGSREGULAR EXPRESSIONSDECLARATIVE PROGRAMMINGADVANCED LANGUAGE FEATURES
 */


function domainName(url){
  let help = "";
  let help2 = "";
  if (url.includes("http://") || url.includes("https://")) {
    help += url.split("//").slice(1).join("")
  } else {
    help = url;
  }
  if (help.includes("www.")) {
    help2 = help.split(".").slice(1, 2).join("")
  } else {
    help2 = help.split(".").slice(0, 1).join("")
  }
  return help2;
}

console.log(domainName("http://google.com"))
console.log(domainName("www.xakep.ru"))

/**
 * const { assert } = require("chai");

describe("Sample test", () => {
  it("Should pass sample tests", () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://youtube.com"), "youtube");
  })  
})



Best result 

function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
 */
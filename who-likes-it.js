/**
 * You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.



describe('example tests', function() {
  it('should return correct text', function() {
    assert.strictEqual(likes([]), 'no one likes this');
    assert.strictEqual(likes(['Peter']), 'Peter likes this');
    assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
    assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
    assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
  });
});
 */

function likes(names) {
  
  names.length < 2 ? suffix = " likes this" : suffix = " like this";
  let prefix = "";

  if (names.length === 0) {
    prefix = "no one"; 
  }

  if (names.length === 1) {
    prefix = names[0];
  }

  if (names.length === 2) {
    prefix = names[0] + " and " + names[1];
  }
  
  if (names.length === 3) {
    prefix = names[0] + ", " + names[1] + " and " + names[2]
  }
  
  if (names.length > 3) {
    prefix = names[0] + ", " + names[1] + ` and ${names.length - 2} others`; 
  }

  return prefix + suffix;
}

console.log(likes([]))
console.log(likes(['Peter']))

console.log(likes(['Jacob', 'Alex']))
console.log(likes(['Max', 'John', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))
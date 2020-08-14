//1. Reverse Words Starting with a Particular Letter
console.log("1. Reverse Words Starting with a Particular Letter");
function specialReverse(string, c) {
  let arr = string.split(' '); 
  let len = arr.length;
  for (i = 0; i < len; i++) {
    if (arr[i].substr(0, 1) == c) {
      let newarr = arr[i].split(''); 
      arr[i] = newarr.reverse().join(''); 
    }
  }
  return arr.join(' '); 
}
console.log(specialReverse("word searches are super fun", "s"));
console.log(specialReverse("first man to walk on the moon", "m"));
console.log(specialReverse("peter piper picked pickled peppers", "p"));

//2. Hitting the Jackpot
console.log("2. Hitting the Jackpot");
function testJackpot(arr) {
  if (
    arr[0] === arr[1] &&
    arr[1] === arr[2] &&
    arr[2] === arr[3] &&
    arr[3] === arr[0]
  ) 
  {
    return true;
  } 
  else
  {
    return false;
  }
}
console.log(testJackpot(["@", "@", "@", "@"]));
console.log(testJackpot(["abc", "abc", "abc", "abc"]));
console.log(testJackpot(["SS", "SS", "SS", "SS"]));
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
console.log(testJackpot(["SS", "SS", "SS", "Ss"]));


//3. Remove Duplicates from an Array
console.log("3. Remove Duplicates from an Array");
function removeDups(array) {
  return array.filter((a, b) => array.indexOf(a) === b);
}
console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(['John', 'Taylor', 'John']));
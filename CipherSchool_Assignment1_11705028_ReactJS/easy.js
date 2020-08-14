//  Count Instances of a Character in a String
console.log("1. Count Instances of a Character in a String");
function charCount(c, string) 
{
 var count = 0;
 for (var position = 0; position < string.length; position++) 
 {
    if (c == string.charAt(position)) 
      {
           count += 1;
      }
  }
  return count;
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));


//2. Add up the Numbers from a Single Number
console.log("2. Add up the Numbers from a Single Number");
function addUp(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));

//3. Replace Vowel with Another Character
console.log("3. Replace Vowel with Another Character");
function replaceVowel(string) 
{
 for (var position = 0; position < string.length; position++) 
 {
    if (string.charAt(position) == 'a') 
    {
        string = string.replace(string.charAt(position), 1);      
    }
    if (string.charAt(position) == 'e') 
    {
        string = string.replace(string.charAt(position), 2);      
    }
    if (string.charAt(position) == 'i') 
    {
        string = string.replace(string.charAt(position), 3);      
    }
    if (string.charAt(position) == 'o') 
    {
        string = string.replace(string.charAt(position), 4);      
    }
    if (string.charAt(position) == 'u') 
    {
        string = string.replace(string.charAt(position), 5);      
    }                               
  }
  return string;
}
console.log(replaceVowel("karachi"));
console.log(replaceVowel("chembur"));
console.log(replaceVowel("khandbari"));
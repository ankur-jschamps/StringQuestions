//01-Find the Index of the First Occurrence in a String
function strStr(haystack, needle) {
  return haystack.indexOf(needle);
}

console.log(strStr("sadbutsad", "sad"));   
console.log(strStr("leetcode", "leeto"));  



//02-Reverse String


//03-Valid Anagram
function isAnagram(s ,t){
  if(s.length !== t.length) return false;

    const first = s.split('').sort().join('');
  const second = t.split('').sort().join('');

  return first === second;
}
console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car"));


//04-ongest Common Prefix


//05-Merge Strings Alternately


//06-Length of Last Word
function lengthOfLastWord(str) {
 
  str = str.trim();

  
  const words = str.split(" ");

  
  const lastWord = words[words.length - 1];


  return lastWord.length;
}


console.log(lengthOfLastWord("Hello World"));             
console.log(lengthOfLastWord("   fly me   to   the moon  ")); 
console.log(lengthOfLastWord("luffy is still joyboy"));   

//07-Valid Palindrome


//08-String Compression


//09-Reverse Words in a String
function reverseWords(s){
 s = s.trim();

  const words = s.split(" ");

  const reversed = words.reverse();

  return reversed.join(" ");
}

console.log(reverseWords("the sky is blue"));


//10-Reverse Vowels of a String


//11-Rotate String
function rotateStr(s, goal) {
  if (s.length !== goal.length) return false;
  const doubled = s + s;
  return doubled.includes(goal);
}

console.log(rotateStr("abcde", "cdeab")); 

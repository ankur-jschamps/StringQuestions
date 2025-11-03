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

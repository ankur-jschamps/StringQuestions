//09-Reverse Words in a String
function reverseWords(s){
 s = s.trim();

  const words = s.split(" ");

  const reversed = words.reverse();

  return reversed.join(" ");
}

console.log(reverseWords("the sky is blue"));

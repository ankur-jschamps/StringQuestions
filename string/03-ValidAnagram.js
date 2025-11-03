//03-Valid Anagram
function isAnagram(s ,t){
  if(s.length !== t.length) return false;

    const first = s.split('').sort().join('');
  const second = t.split('').sort().join('');

  return first === second;
}
console.log(isAnagram("anagram", "nagaram")); 
console.log(isAnagram("rat", "car"));


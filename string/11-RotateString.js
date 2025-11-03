
//11-Rotate String
function rotateStr(s, goal) {
  if (s.length !== goal.length) return false;
  const doubled = s + s;
  return doubled.includes(goal);
}

console.log(rotateStr("abcde", "cdeab")); 

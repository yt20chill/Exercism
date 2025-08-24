const alphabets = Array(26)
  .fill(0)
  .map((e, i) => String.fromCharCode(e + i + 65));


export function isPangram(sentence: string):boolean {
  const charArr = sentence.toUpperCase().split("").filter(char => alphabets.includes(char));
  const charSet = new Set(charArr);
  if (charSet.size<26) return false;
  return true;
}

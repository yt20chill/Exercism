export function count(subtitle: string): Map<string, number> {
  const wordMap = new Map<string, number>();
  const whiteSpacesRegex = /\s+/g;
  const punctuationRegex = /[^a-z0-9']/g;
  const singleQuoteRegex = /^[']+|[']+$/g;
  subtitle = subtitle.toLowerCase();
  subtitle = subtitle.replace(punctuationRegex, " ");
  const words = subtitle.split(whiteSpacesRegex);
  for (let word of words) {
    word = word.replace(singleQuoteRegex, "");
    if (!word) continue;
    wordMap.set(word, wordMap.get(word)? wordMap.get(word)! + 1 : 1);
  }
  return wordMap;
}

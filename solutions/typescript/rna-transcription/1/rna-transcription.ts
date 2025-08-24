export function toRna(dna:string) {
  const dnaArray = dna.split("");
  const rnaArray:Array<string> = []
  for (let n of dnaArray) {
    switch (n) {
      case "A":
        rnaArray.push("U");
        break;
      case "T":
        rnaArray.push("A");
        break;
      case "C":
        rnaArray.push("G");
        break;
      case "G":
        rnaArray.push("C");
        break;
      default:
        throw new Error("Invalid input DNA.");
    }
  }
  return rnaArray.join("");
}

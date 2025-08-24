const brackets= Object.freeze({
  "}": "{",
  "]": "[",
  ")": "(",
});

type BracketType = "{" | "}" | "[" | "]" | "(" | ")";

export function isPaired(input: string): boolean {
  let inputArr:Array<BracketType> = input
    .split("")
    .filter(
      (e) =>
        e === "{" ||
        e === "}" ||
        e === "[" ||
        e === "]" ||
        e === "(" ||
        e === ")"
  ) as Array<BracketType>;
  if (inputArr.length === 0) return true;
  if (inputArr.length % 2 === 1) return false;
  let stack: Array<BracketType> = [];
  for (let i = 0; i < inputArr.length; i++) {
    let e = inputArr[i];
    console.log({ i, e });
    //if isOpenBracket
    //@ts-ignore
  if (Object.values(brackets).includes(inputArr[i])) {
    stack.push(inputArr[i]);
    console.log({ stack });
  } else {
    //if (stack.pop() !== brackets[inputArr[i]]) return false;  //Doesn't work
    let s = stack.pop();
    //@ts-ignore
    if (s !== brackets[inputArr[i]]) return false;
  } 
}
  return stack.length === 0;
}

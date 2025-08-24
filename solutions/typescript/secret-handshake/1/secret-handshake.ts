export function commands(code: number) {
  if (code < 1 || code > 31) {
    return []
    // throw new Error("Code should be between 1 and 31");
  }

  const actionMap = [
    "reverse",
    "jump",
    "close your eyes",
    "double blink",
    "wink",
  ];

  const digits = code.toString(2).padStart(5, "0").split("");
  const actions = digits.reduce(
    (acc, val, i) => (Number(val) ? [actionMap[i], ...acc] : acc),
    [] as string[]
  );
  const lastActionIndex = actions.length - 1;
  if (actions[lastActionIndex] !== "reverse") {
    return actions;
  }
  return actions.reverse().slice(1);
}
export function proverb(...inputs: Array<string>): string {
  if (!Array.isArray(inputs)) return "";
  const rhymeStr = inputs.reduce((rhymeString, noun, index) => {
    if (inputs[index + 1]) return rhymeString += `For want of a ${noun} the ${inputs[index + 1]} was lost.\n`
    return rhymeString += `And all for the want of a ${inputs[0]}.`
  }, "");
  return rhymeStr;
}

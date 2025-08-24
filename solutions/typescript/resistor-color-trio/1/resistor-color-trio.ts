const bandList = [
  "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"
]
export function decodedResistorValue(colors:Array<string>) {
  if (colors.length < 3) return;
  const c1 = bandList.indexOf(colors[0]) * 10;
  const c2 = bandList.indexOf(colors[1]);
  const orderOfMagnitude = 10**bandList.indexOf(colors[2]);
  const ohm = (c1 + c2) * orderOfMagnitude;
  if (ohm / 1e9 > 1) return `${ohm / 1e9} gigaohms`;
  if (ohm / 1e6 > 1) return `${ohm / 1e6} megaohms`;
  if (ohm / 1e3 > 1) return `${ohm / 1e3} kiloohms`;
  return `${ohm} ohms`;
}

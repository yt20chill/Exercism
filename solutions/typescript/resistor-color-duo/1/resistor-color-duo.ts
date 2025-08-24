export function decodedValue(resistorColors:string[]):number {
  if (resistorColors.length === 0) return 0;
  if (resistorColors.length === 1) return resistorColors.indexOf(resistorColors[0]) * 10;
  else return Number(Colors.indexOf(resistorColors[0]).toString() + Colors.indexOf(resistorColors[1]).toString());
}

const Colors: string[] = [
"black",
"brown",
"red",
"orange",
"yellow",
"green",
"blue",
"violet",
"grey",
"white",
];
export function score(x: number, y: number): number {
  const r = (x ** 2 + y ** 2) ** 0.5;
  if (r > 10) return 0;
  if (r <= 10 && r > 5) return 1;
  if (r <= 5 && r > 1) return 5;
  return 10;
}

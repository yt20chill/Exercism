export function find(haystack: number[], needle: number): number | never {
  if (
    !haystack.length ||
    needle > haystack[haystack.length - 1] ||
    needle < haystack[0]
  ) {
    throw new Error("Value not in array");
  }
  const middle = Math.floor(haystack.length / 2);
  if (haystack[middle] === needle) {
    return middle;
  }
  return haystack[middle] > needle
    ? find(haystack.slice(0, middle), needle)
    : find(haystack.slice(middle), needle) + middle;
}

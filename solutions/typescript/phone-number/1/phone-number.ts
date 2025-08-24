export function clean(phoneNo: string) {
  if (/[a-zA-Z]/.test(phoneNo)) throw new Error('Letters not permitted');
  if(/[^0-9-.()\s]/.test(phoneNo) && phoneNo[0] !== '+') throw new Error('Punctuations not permitted');
  const numbers = phoneNo.split("").filter(value => /[0-9]/.test(value)).map(value => parseInt(value));
  if (numbers.length > 11) throw new Error('More than 11 digits');
  if (numbers.length < 10) throw new Error('Incorrect number of digits');
  if (numbers.length === 11) {
    if (numbers[0] !== 1) throw new Error('11 digits must start with 1');
    numbers.splice(0,1);
  }
  if (numbers[0] < 2) throw new Error(`Area code cannot start with ${numbers[0] === 0? "zero": "one"}`);
  if (numbers[3] < 2) throw new Error(`Exchange code cannot start with ${numbers[3] === 0? "zero": "one"}`);
  return numbers.join("")
}

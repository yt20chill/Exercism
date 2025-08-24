export function transpose(rows: Array<string>): Array<string> {
  return rows.reduce((transposed: string[][], row, rowIndex, input) => {
    [...row].forEach((char, colIndex) => {
      //input.length = total number of rows in the original matrix (i.e. the total number of col in the transposed matrix)
      if (transposed.length <= colIndex) transposed.push(new Array(input.length));
      transposed[colIndex][rowIndex] = char;
      //loop through all rows
      for (let filler = rowIndex - 1; filler >= 0; filler--) {
        transposed[colIndex][filler] = transposed[colIndex][filler] ?? " ";
      }
    })
    return transposed;
  }, []).map(newRow => newRow.join(''));
}
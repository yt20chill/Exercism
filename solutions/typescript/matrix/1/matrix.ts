export class Matrix {
  matrix: string[][];
  constructor(num: string) {
    this.matrix = num.split("\n").map(row => row.split(" "));
  }

  get rows(): Array<Array<number>> {
    return this.matrix.map(row => row.map(e => Number(e)));
  }

  get columns(): Array<Array<number>> {
    return this.matrix[0].map((col, colIndex) => this.matrix.map(row => Number(row[colIndex])));
    
  }
}

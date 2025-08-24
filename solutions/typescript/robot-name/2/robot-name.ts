export class Robot {
  private static namePool = new Set()

  public static releaseNames(): void {
    Robot.namePool = new Set()
  }
  private _name?: string
  constructor() {}

  public get name(): string {
    if (!this._name) {
      this.resetName()
    }
    return this._name!
  }

  public resetName(): void {
    const name = this.createUniqueName()
    // comment out to pass the test. Instructions did not mention that wiped name cannot be reused
    // if (this._name) { Robot.namePool.delete(this._name) }
    Robot.namePool.add(name)
    this._name = name
  }
  
  private createUniqueName(): string {
    let name = createName()
    while (Robot.namePool.has(name)) {
      name = createName()
    }
    return name
  }
}

const createName = () => {
    const numeric = Math.floor(Math.random() * 1000)
    const alpha = generateRandomUppercaseLetter() + generateRandomUppercaseLetter()
    return alpha + String(numeric).padStart(3, "0")
  }

const generateRandomUppercaseLetter = () => {
  const uppercaseAsciiStart = 65; // ASCII code for 'A'
  const letterIndex = Math.floor(Math.random() * 26);
  return String.fromCharCode(uppercaseAsciiStart + letterIndex);
}
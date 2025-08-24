export class Robot {
  private static namePool = new Set()

  public static releaseNames(): void {
    Robot.namePool = new Set()
  }
  private _name?: string
  constructor() {}

  public get name(): string {
    if (!this._name) {
      this._name = this.createUniqueName()
      Robot.namePool.add(this._name)
    }
    return this._name!
  }

  public resetName(): void {
    // comment this out to pass the test. This criteria is never mentioned in the instrcutions
    // if (this._name) { Robot.namePool.delete(this._name) }
    this._name = undefined
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
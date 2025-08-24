export class InvalidInputError extends Error {
  constructor(message: string) {
    super();
    this.message = message || "Invalid Input";
  }
}

const Direction = ["north", "east", "south", "west"] as const;
type DirectionType = (typeof Direction)[number];
enum Step {
  Advance = "A",
  Right = "R",
  Left = "L",
}
type Coordinates = [number, number];

export class Robot {
  #bearing: DirectionType;
  #coordinates: Coordinates;
  constructor() {
    this.#bearing = "north";
    this.#coordinates = [0, 0];
  }
  private isDirection(dir: any): dir is DirectionType {
    return Object.values(Direction).includes(dir);
  }
  private isStep(step: any): step is Step {
    return Object.values(Step).includes(step);
  }
  get bearing(): DirectionType {
    return this.#bearing;
  }

  get coordinates(): Coordinates {
    return this.#coordinates;
  }

  place(placement: { x: number; y: number; direction: string }) {
    if (!this.isDirection(placement.direction))
      throw new InvalidInputError("invalid direction");
    this.#bearing = placement.direction;
    this.#coordinates = [placement.x, placement.y];
  }

  evaluate(instructions: string) {
    const instructionArr = instructions.split("");
    const filteredInstructions = instructionArr.filter((step) =>
      this.isStep(step)
    ) as Step[];
    filteredInstructions.forEach((step) => this.move(step));
  }
  private move(step: Step) {
    switch (step) {
      case Step.Advance:
        this.advance();
        break;
      case Step.Left:
        this.turnLeft();
        break;
      case Step.Right:
        this.turnRight();
        break;
      default:
        break;
    }
  }
  private advance() {
    switch (this.#bearing) {
      case "north":
        this.#coordinates[1]++;
        break;
      case "south":
        this.#coordinates[1]--;
        break;
      case "east":
        this.#coordinates[0]++;
        break;
      case "west":
        this.#coordinates[0]--;
        break;
      default:
        break;
    }
  }
  private turnLeft() {
    let dirIndex = Direction.indexOf(this.#bearing);
    // wrap around direction array
    dirIndex = (dirIndex - 1 + Direction.length) % Direction.length;
    this.#bearing = Direction[dirIndex];
    return;
  }
  private turnRight() {
    let dirIndex = Direction.indexOf(this.#bearing);
    dirIndex = (dirIndex + 1) % Direction.length;
    this.#bearing = Direction[dirIndex];
    return;
  }
}

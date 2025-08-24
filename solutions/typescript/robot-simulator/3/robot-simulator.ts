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

  private move(step: string) {
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
        throw new InvalidInputError("invalid instruction");
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
    instructions.split("").forEach((step) => this.move(step));
  }
}

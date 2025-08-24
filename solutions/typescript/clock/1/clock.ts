export class Clock {
  hour = 0;
  minute = 0;
  constructor(hour: number, minute?: number) {
    minute = minute ?? 0;
    this.minute = minute%60 >= 0 ? minute % 60 : 60 + minute % 60;
    this.hour = hour + Math.floor(minute/60);
    this.hour = this.hour%24 >= 0 ? this.hour % 24 : 24 + this.hour % 24;
    }


  public toString(): string {
    const hourInString =
      this.hour > 9 ? this.hour.toString() : 0 + this.hour.toString();
    const minInString =
      this.minute > 9 ? this.minute.toString() : 0 + this.minute.toString();
    return `${hourInString}:${minInString}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hour, this.minute + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hour, this.minute - minutes);
  }

  public equals(other: Clock): boolean {
    if (this.hour === other.hour && this.minute === other.minute) return true;
    return false;
  }
}

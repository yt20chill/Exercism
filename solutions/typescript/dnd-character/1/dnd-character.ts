export class DnDCharacter {
  strength;
  dexterity;
  constitution;
  intelligence;
  wisdom;
  charisma;
  hitpoints;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = DnDCharacter.getModifierFor(this.constitution)+10;
  }
  public static generateAbilityScore(): number {
    let ap = 0;
    let min = 18;
    for (let roll = 0; roll < 4; roll++) {
      const num = Math.ceil(Math.random() * 6);
      ap += num;
      min = min < num ? min : num;
    }
    ap -= min;
    return (ap);
  }

  public static getModifierFor(abilityValue: number): number {
    if (abilityValue >= 10) return Math.floor((abilityValue - 10) / 2);
    return (
      Math.sign((abilityValue - 10) / 2) *
      Math.ceil(Math.abs(abilityValue - 10) / 2)
    );
  }
}

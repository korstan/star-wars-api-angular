/**
 * Contains film properties, which we need to store from people-dto.
 */
export class Character {
  /**
   * Character's year of birth
   */
  public birthYear: string;
  /**
   * Database entry creation date
   */
  public created: string;
  /**
   * ID of character in database. Use it in request to fetch character's details.
   */
  public databaseId: number;
  /**
   * Database entry change date
   */
  public edited: string;
  /**
   * Character's eye color
   */
  public eyeColor: string;
  /**
   * Character's gender
   */
  public gender: string;
  /**
   * Character's hair_color
   */
  public hairColor: string;
  /**
   * Character's height
   */
  public height: string;
  /**
   * Character's home planet ID
   */
  public homeworld: number;
  /**
   * Character's mass
   */
  public mass: string;
  /**
   * Character's name
   */
  public name: string;
  /**
   * Character's skin color
   */
  public skinColor: string;

  constructor(character: Partial<Character>) {
    this.birthYear = character.birthYear;
    this.created = character.created;
    this.edited = character.edited;
    this.eyeColor = character.eyeColor;
    this.gender = character.gender;
    this.hairColor = character.hairColor;
    this.height = character.height;
    this.homeworld = character.homeworld;
    this.mass = character.mass;
    this.name = character.name;
    this.skinColor = character.skinColor;
  }
}

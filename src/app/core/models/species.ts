/**
 * Species class
 */
export class Species {
  /**
   * Species average height
   */
  public averageHeight: string;
  /**
   * Species average lifespan
   */
  public averageLifespan: string;
  /**
   * Species classification
   */
  public classification: string;
  /**
   * Species database entry creation date
   */
  public created: string;
  /**
   * Species designation
   */
  public designation: string;
  /**
   * Species database change date
   */
  public edited: string;
  /**
   * Species eye colors
   */
  public eyeColors: string;
  /**
   * Species hair colors
   */
  public hairColors: string;
  /**
   * Species homeworld ID
   */
  public homeworld: number;
  /**
   * Species language
   */
  public language: string;
  /**
   * Species name
   */
  public name: string;
  /**
   * IDs of people, belongs to species
   */
  public people: number[];
  /**
   * Species skin colors
   */
  public skinColors: string;

  public constructor(species: Partial<Species>) {
    this.averageHeight = species.averageHeight;
    this.averageLifespan = species.averageLifespan;
    this.classification = species.classification;
    this.created = species.created;
    this.designation = species.designation;
    this.edited = species.edited;
    this.eyeColors = species.eyeColors;
    this.hairColors = species.hairColors;
    this.homeworld = species.homeworld;
    this.language = species.language;
    this.name = species.name;
    this.people = species.people;
    this.skinColors = species.skinColors;
  }
}

/**
 * Starship class
 */
export class Starship {
  /**
   * Starship's MGLT
   */
  public MGLT: string;
  /**
   * Starship's hyperdrive rating
   */
  public hyperdriveRating: string;
  /**
   * Starship class
   */
  public starshipClass: string;

  public constructor(starship: Partial<Starship>) {
    this.MGLT = starship.MGLT;
    this.hyperdriveRating = starship.hyperdriveRating;
    this.starshipClass = starship.starshipClass;
  }
}

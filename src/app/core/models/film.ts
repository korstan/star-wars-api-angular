/**
 * Film class. Contains film properties, which we need to store from films-dto.
 */
export class Film {
  /**
   * Characters from film IDs array
   */
  public characters: number[];
  /**
   * Film creation date
   */
  public created: string;
  /**
   * ID of film in database. Use it in request to fetch film details.
   */
  public databaseId: number;
  /**
   * Director's name
   */
  public director: string;
  /**
   * Episode id
   */
  public episodeId: number;
  /**
   * Crawl from film's beginning
   */
  public openingCrawl: string;
  /**
   * Planets from film IDs array
   */
  public planets: number[];
  /**
   * Producer's name
   */
  public producer: string;
  /**
   * Film release date
   */
  public releaseDate: string;
  /**
   * Species from film IDs array
   */
  public species: number[];
  /**
   * Starships from film IDs array
   */
  public starships: number[];
  /**
   * Film's title
   */
  public title: string;
  /**
   * Vehicles from film IDs array
   */
  public vehicles: number[];
  public constructor(film: Partial<Film>) {
    this.characters = film.characters;
    this.created = film.created;
    this.director = film.director;
    this.episodeId = film.episodeId;
    this.openingCrawl = film.openingCrawl;
    this.planets = film.planets;
    this.producer = film.producer;
    this.releaseDate = film.releaseDate;
    this.species = film.species;
    this.starships = film.starships;
    this.title = film.title;
    this.vehicles = film.vehicles;
  }
}

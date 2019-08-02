/**
 * DTO for films
 */
export interface FilmsDto {
    /**
     * Characters from film IDs array
     */
    characters: number[];
    /**
     * Film creation date
     */
    created: string;
    /**
     * Director's name
     */
    director: string;
    /**
     * Episode id
     */
    episode_id: number;
    /**
     * Crawl from film's beginning
     */
    opening_crawl: string;
    /**
     * Planets from film IDs array
     */
    planets: number[];
    /**
     * Producer's name
     */
    producer: string;
    /**
     * Film release date
     */
    release_date: string;
    /**
     * Species from film IDs array
     */
    species: number[];
    /**
     * Starships from film IDs array
     */
    starships: number[];
    /**
     * Film's title
     */
    title: string;
    /**
     * Vehicles from film IDs array
     */
    vehicles: number[];
}

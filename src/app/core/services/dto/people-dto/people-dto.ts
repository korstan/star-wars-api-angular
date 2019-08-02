/**
 * DTO for people
 */
export interface PeopleDto {
    /**
     * Character's year of birth
     */
    birth_year: string;
    /**
     * Database entry creation date
     */
    created: string;
    /**
     * Database entry change date
     */
    edited: string;
    /**
     * Character's eye color
     */
    eye_color: string;
    /**
     * Character's gender
     */
    gender: string;
    /**
     * Character's hair_color
     */
    hair_color: string;
    /**
     * Character's height
     */
    height: string;
    /**
     * Character's home planet ID
     */
    homeworld: number;
    /**
     * Character's mass
     */
    mass: string;
    /**
     * Character's name
     */
    name: string;
    /**
     * Character's skin color
     */
    skin_color: string;
}

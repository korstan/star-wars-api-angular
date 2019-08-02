/**
 * DTO for species
 * @todo complete interface
 */
export interface SpeciesDto {
    /**
     * Species average height
     */
    average_height: string;
    /**
     * Species average lifespan
     */
    average_lifespan: string;
    /**
     * Species classification
     */
    classification: string;
    /**
     * Species database entry creation date
     */
    created: string;
    /**
     * Species designation
     */
    designation: string;
    /**
     * Species database change date
     */
    edited: string;
    /**
     * Species eye colors
     */
    eye_colors: string;
    /**
     * Species hair colors
     */
    hair_colors: string;
    /**
     * Species homeworld ID
     */
    homeworld: number;
    /**
     * Species language
     */
    language: string;
    /**
     * Species name
     */
    name: string;
    /**
     * IDs of people, belongs to species
     */
    people: number[];
    /**
     * Species skin colors
     */
    skin_colors: string;
}

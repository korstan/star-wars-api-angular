/**
 * DTO for transport
 * @todo complete interface
 */
export interface TransportDto {
    /**
     * Transport's cargo capacity
     */
    cargo_capacity: string;
    /**
     * Transport's consumables
     */
    consumables: string;
    /**
     * Transport's cost in credits
     */
    cost_in_credits: string;
    /**
     * Transport's database entry creation date
     */
    created: string;
    /**
     * Transport's crew
     */
    crew: string;
    /**
     * Transport's database entry change date
     */
    edited: string;
    /**
     * Transport's length
     */
    length: string;
    /**
     * Transport's manufacturer
     */
    manufacturer: string;
    /**
     * Transport's max atmosphering speed
     */
    max_atmosphering_speed: string;
    /**
     * Transport's model
     */
    model: string;
    /**
     * Transport's name
     */
    name: string;
    /**
     * Transport's passengers
     */
    passengers: string;
}

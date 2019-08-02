/**
 * Dto for planets
 * @todo complete interface
 */
export interface PlanetsDto {
    /**
     * Planet's climate
     */
    climate: string;
    /**
     * Planet database entry creation date
     */
    created: string;
    /**
     * Planet's diameter
     */
    diameter: string;
    /**
     * Planet database entity change date
     */
    edited: string;
    /**
     * Planet's gravity
     */
    gravity: string;
    /**
     * Name of the planet
     */
    name: string;
    /**
     * Planet's orbital period
     */
    orbital_period: string;
    /**
     * Planet's population
     */
    population: string;
    /**
     * Planet's rotation period
     */
    rotation_period: string;
    /**
     * Planet's surface water
     */
    surface_water: string;
    /**
     * Planet's terrain
     */
    terrain: string;
}

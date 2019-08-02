/**
 * Planet class
 */
export class Planet {
    /**
     * Planet's climate
     */
    public climate: string;
    /**
     * Planet database entry creation date
     */
    public created: string;
    /**
     * Planet's diameter
     */
    public diameter: string;
    /**
     * Planet database entity change date
     */
    public edited: string;
    /**
     * Planet's gravity
     */
    public gravity: string;
    /**
     * Name of the planet
     */
    public name: string;
    /**
     * Planet's orbital period
     */
    public orbitalPeriod: string;
    /**
     * Planet's population
     */
    public population: string;
    /**
     * Planet's rotation period
     */
    public rotationPeriod: string;
    /**
     * Planet's surface water
     */
    public surfaceWater: string;
    /**
     * Planet's terrain
     */
    public terrain: string;

    public constructor(planet: Partial<Planet>) {
        this.climate = planet.climate;
        this.created = planet.created;
        this.diameter = planet.diameter;
        this.edited = planet.edited;
        this.gravity = planet.gravity;
        this.name = planet.name;
        this.orbitalPeriod = planet.orbitalPeriod;
        this.population = planet.population;
        this.rotationPeriod = planet.rotationPeriod;
        this.surfaceWater = planet.surfaceWater;
        this.terrain = planet.terrain;
    }
}

/**
 * Transport class
 */
export class Transport {
    /**
     * Transport's cargo capacity
     */
    public cargoCapacity: string;
    /**
     * Transport's consumables
     */
    public consumables: string;
    /**
     * Transport's cost in credits
     */
    public costInCredits: string;
    /**
     * Transport's database entry creation date
     */
    public created: string;
    /**
     * Transport's crew
     */
    public crew: string;
    /**
     * Transport's database entry change date
     */
    public edited: string;
    /**
     * Transport's length
     */
    public length: string;
    /**
     * Transport's manufacturer
     */
    public manufacturer: string;
    /**
     * Transport's max atmosphering speed
     */
    public maxAtmospheringSpeed: string;
    /**
     * Transport's model
     */
    public model: string;
    /**
     * Transport's name
     */
    public name: string;
    /**
     * Transport's passengers
     */
    public passengers: string;

    public constructor (transport: Partial<Transport>) {
        this.cargoCapacity = transport.cargoCapacity;
        this.consumables = transport.consumables;
        this.costInCredits = transport.costInCredits;
        this.created = transport.created;
        this.crew = transport.crew;
        this.edited = transport.edited;
        this.length = transport.length;
        this.manufacturer = transport.manufacturer;
        this.maxAtmospheringSpeed = transport.maxAtmospheringSpeed;
        this.model = transport.model;
        this.name = transport.name;
        this.passengers = transport.passengers;
    }
}

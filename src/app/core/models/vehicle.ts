/**
 * Vehicle class
 */
export class Vehicle {
    /**
     * Vehicle's pilots IDs (might be omitted)
     */
    public pilots: number[];
    /**
     * Vehicle class
     */
    public class: string;

    public constructor(vehicle: Partial<Vehicle>) {
        this.pilots = vehicle.pilots;
        this.class = this.class;
    }
}

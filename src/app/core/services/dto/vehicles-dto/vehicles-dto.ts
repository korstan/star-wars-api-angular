/**
 * DTO for vehicles
 * @todo complete interface
 */
export interface VehiclesDto {
    /**
     * Vehicle's pilots IDs (might be omitted)
     */
    pilots: number[];
    /**
     * Vehicle class
     */
    vehicle_class: string;
}

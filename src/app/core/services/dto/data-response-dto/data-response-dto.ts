import { FilmsDto } from '../films-dto/films-dto';
import { PeopleDto } from '../people-dto/people-dto';
import { PlanetsDto } from '../planets-dto/planets-dto';
import { SpeciesDto } from '../species-dto/species-dto';
import { StarshipsDto } from '../starships-dto/starships-dto';
import { TransportDto } from '../transport-dto/transport-dto';
import { VehiclesDto } from '../vehicles-dto/vehicles-dto';

/**
 * DTO for data obtained from database after authentication
 */
export interface DataResponseDto {
  /**
   * Films data
   */
  films: FilmsDto;
  /**
   * People data
   */
  people: PeopleDto;
  /**
   * Planets data
   */
  planets: PlanetsDto;
  /**
   * Species data
   */
  species: SpeciesDto;
  /**
   * Starships data
   */
  starships: StarshipsDto;
  /**
   * Transport data
   */
  transport: TransportDto;
  /**
   * Vehicles data
   */
  vehicles: VehiclesDto;
}

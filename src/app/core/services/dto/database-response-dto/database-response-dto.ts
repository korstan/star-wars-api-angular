import { DatabaseItemDto } from '../database-item-dto/database-item-dto';
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
export interface DatabaseResponseDto {
  /**
   * Films data
   */
  films: DatabaseItemDto<FilmsDto>[];
  /**
   * People data
   */
  people: DatabaseItemDto<PeopleDto>[];
  /**
   * Planets data
   */
  planets: DatabaseItemDto<PlanetsDto>[];
  /**
   * Species data
   */
  species: DatabaseItemDto<SpeciesDto>[];
  /**
   * Starships data
   */
  starships: DatabaseItemDto<StarshipsDto>[];
  /**
   * Transport data
   */
  transport: DatabaseItemDto<TransportDto>[];
  /**
   * Vehicles data
   */
  vehicles: DatabaseItemDto<VehiclesDto>[];
}

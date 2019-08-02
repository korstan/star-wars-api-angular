import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Character } from '../../models/character';
import { DatabaseItemDto } from '../dto/database-item-dto/database-item-dto';
import { PeopleDto } from '../dto/people-dto/people-dto';
/**
 * This service provides fetching people (characters) information from database and mapping it from people-dto to character model
 */
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}
  /**
   * Fetchs characters from database and returns them as observable
   */
  public fetchAllPeople(): Observable<Character[]> {
    return this.http
      .get<DatabaseItemDto<PeopleDto>[]>(`${environment.dbUrl}people.json`)
      .pipe(
        map(people =>
          people.map((character, index) =>
            this.mapDtoToCharacter(character.fields, index),
          ),
        ),
      );
  }
  /**
   * Fetchs character from database by its ID and returns it as observable
   */
  public fetchCharacterById(id: number): Observable<Character> {
    return this.http
      .get<DatabaseItemDto<PeopleDto>>(`${environment.dbUrl}people/${id}.json`)
      .pipe(map(character => this.mapDtoToCharacter(character.fields, id)));
  }
  /**
   * Maps peopleDto into a character model
   * @param peopleDto People DTO to map into a model
   * @param characterId Character's database ID
   */
  public mapDtoToCharacter(
    peopleDto: PeopleDto,
    characterId: number,
  ): Character {
    const characterModel = new Character({});
    characterModel.birthYear = peopleDto.birth_year;
    characterModel.databaseId = characterId;
    characterModel.created = peopleDto.created;
    characterModel.edited = peopleDto.edited;
    characterModel.eyeColor = peopleDto.eye_color;
    characterModel.gender = peopleDto.gender;
    characterModel.hairColor = peopleDto.hair_color;
    characterModel.height = peopleDto.height;
    characterModel.homeworld = peopleDto.homeworld;
    characterModel.mass = peopleDto.mass;
    characterModel.name = peopleDto.name;
    characterModel.skinColor = peopleDto.skin_color;
    return characterModel;
  }
}

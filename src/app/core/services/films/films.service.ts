import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Film } from '../../models/film';
import { DatabaseItemDto } from '../dto/database-item-dto/database-item-dto';
import { FilmsDto } from '../dto/films-dto/films-dto';
/**
 * This service provides mapping DTO from fetched data into Film objects.
 */
@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  public constructor(private http: HttpClient) {}
  /**
   * Fetchs films from database and returns them as observable
   */
  public fetchAllFilms(): Observable<Film[]> {
    return this.http
      .get<DatabaseItemDto<FilmsDto>[]>(`${environment.dbUrl}films.json`)
      .pipe(
        map(films =>
          films.map((film, index) => this.mapDtoToFilm(film.fields, index)),
        ),
      );
  }
  /**
   * Fetchs film from database by its ID and returns it as observable
   */

  public fetchFilmById(id: number): Observable<Film> {
    return this.http
      .get<DatabaseItemDto<FilmsDto>>(
        `${environment.dbUrl}films/${id}.json`,
      )
      .pipe(map(film => this.mapDtoToFilm(film.fields, id)));
  }
  /**
   * Maps FilmDTO into a model
   * @param filmDto Film DTO
   * @param databaseId ID of film in database
   */
  private mapDtoToFilm(filmDto: FilmsDto, databaseId: number): Film {
    const filmModel = new Film({});
    filmModel.characters = filmDto.characters;
    filmModel.created = filmDto.created;
    filmModel.director = filmDto.director;
    filmModel.databaseId = databaseId;
    filmModel.episodeId = filmDto.episode_id;
    filmModel.openingCrawl = filmDto.opening_crawl;
    filmModel.planets = filmDto.planets;
    filmModel.producer = filmDto.producer;
    filmModel.releaseDate = filmDto.release_date;
    filmModel.species = filmDto.species;
    filmModel.starships = filmDto.starships;
    filmModel.title = filmDto.title;
    filmModel.vehicles = filmDto.vehicles;
    return filmModel;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/models/film';
import { FilmsDto } from 'src/app/core/services/dto/films-dto/films-dto';
import { environment } from 'src/environments/environment';

/**
 * Admin films editing functionality
 */
@Injectable({
  providedIn: 'root',
})
export class AdminFilmsService {
  constructor(private http: HttpClient) { }
  /**
   * Sends patch request to update film's data in db
   * @param film Edited film model
   * @param id Film's database ID
   */
  public editFilm(film: Film, id: number): Observable<FilmsDto> {
    return this.http.patch<FilmsDto>(
      `${environment.dbUrl}films/${id}/fields.json`,
      this.mapFilmToDto(film),
    );
  }

  private mapFilmToDto(filmModel: Film): FilmsDto {
    return {
      characters: filmModel.characters,
      created: filmModel.created,
      director: filmModel.director,
      episode_id: filmModel.episodeId,
      opening_crawl: filmModel.openingCrawl,
      planets: filmModel.planets,
      producer: filmModel.producer,
      release_date: filmModel.releaseDate,
      species: filmModel.species,
      starships: filmModel.starships,
      title: filmModel.title,
      vehicles: filmModel.vehicles,
    };
  }
}

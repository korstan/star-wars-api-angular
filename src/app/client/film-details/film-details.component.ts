import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, shareReplay } from 'rxjs/operators';
import { Character } from 'src/app/core/models/character';
import { Film } from 'src/app/core/models/film';
import { FilmsService } from 'src/app/core/services/films/films.service';
import { PeopleService } from 'src/app/core/services/people/people.service';
/**
 * Film details page
 */
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss'],
})
export class FilmDetailsComponent {
  /**
   * Films detailed on a page
   */
  public film$: Observable<Film>;
  /**
   * Details headers to show on page
   * @todo i think a better practice to code these kind of things exists.
   * comment about it please if there is the way to improve it
   */
  public details$: Observable<string[]>;
  /**
   * Film characters
   */
  public characters$: Observable<Character[]>;
  /**
   * Show characters list flag
   */
  public showCharacters = false;

  constructor(
    private filmsService: FilmsService,
    private peopleService: PeopleService,
    private route: ActivatedRoute,
  ) {
    this.film$ = this.route.paramMap.pipe(
      switchMap((params) => this.filmsService.fetchFilmById(parseInt(params.get('id'), 10))),
      shareReplay(1),
    );
    this.characters$ = this.mapCharacters();
    this.details$ = this.film$.pipe(
      map((data: Film) => this.mapDetailsToArray(data)),
    );
  }
  /**
   * Fills details property with film details
   * @param film Film model to map into details string[]
   */
  public mapDetailsToArray(film: Film): string[] {
    const result: string[] = [];
    result.push(`Created: ${film.created}`);
    result.push(`Release date: ${film.releaseDate}`);
    result.push(`Director: ${film.director}`);
    result.push(`Producer: ${film.producer}`);
    result.push(`Opening crawl: ${film.openingCrawl}`);
    /**
     * @todo these strings are arrays, might need it for debug later
    result.push(`Characters: ${film.characters}`);
    result.push(`Planets: ${film.planets}`);
    result.push(`Starships: ${film.starships}`);
    result.push(`Species: ${film.species}`);
    result.push(`Vehicles: ${film.vehicles}`);
    */
    return result;
  }
  /**
   * Returns film's characters as observable
   * @bug fetchs every time we expand characters list on page
   */
  public mapCharacters(): Observable<Character[]> {
    return this.film$.pipe(
      map(film => film.characters),
      switchMap(filmCharacters =>
        this.peopleService
          .fetchAllPeople()
          .pipe(
            map(allPeople =>
              allPeople.filter((id, i) => filmCharacters.indexOf(i) !== -1),
            ),
          ),
      ),
    );
  }
}

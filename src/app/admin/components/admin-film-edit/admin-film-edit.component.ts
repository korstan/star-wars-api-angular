import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Film } from 'src/app/core/models/film';
import { FilmsService } from 'src/app/core/services/films/films.service';

import { AdminFilmsService } from '../../services/admin-films/admin-films.service';
/**
 * Component provides specific film's details with edit function for admin user
 */
@Component({
  selector: 'app-admin-film-edit',
  templateUrl: './admin-film-edit.component.html',
  styleUrls: ['./admin-film-edit.component.scss'],
})
export class AdminFilmEditComponent {
  /**
   * Editable film detailed on page
   */
  public film$: Observable<Film>;

  constructor(
    private adminFilmsService: AdminFilmsService,
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.film$ = this.activatedRoute.paramMap.pipe(
      mergeMap((params: ParamMap) =>
        this.filmsService.fetchFilmById(parseInt(params.get('id'), 10)),
      ),
    );
  }
  /**
   * Send changes to database
   */
  public sendChanges(film: Film): void {
    this.adminFilmsService
      .editFilm(film, film.databaseId)
      .subscribe(() => this.router.navigate(['admin']));
  }
}

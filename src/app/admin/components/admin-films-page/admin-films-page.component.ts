import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from 'src/app/core/models/film';
import { FilmsService } from 'src/app/core/services/films/films.service';
/**
 * Component provides all films with edit function for admin user
 */
@Component({
  selector: 'app-admin-films-page',
  templateUrl: './admin-films-page.component.html',
  styleUrls: ['./admin-films-page.component.scss'],
})
export class AdminFilmsPageComponent {
  /**
   * Films array. Mapping out from data.
   */
  public films$: Observable<Film[]>;
  /**
   * Fields for table headers
   */
  public tableHeaders: string[] = ['Ep.', 'Title', 'Release Date', 'Director'];

  constructor(private filmsService: FilmsService) {
    this.films$ = this.filmsService.fetchAllFilms();
  }
}

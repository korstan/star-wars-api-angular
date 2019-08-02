import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { Film } from 'src/app/core/models/film';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { FilmsService } from 'src/app/core/services/films/films.service';
/**
 * Page with films table
 */
@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss'],
})
export class FilmsPageComponent {
  /**
   * Films array. Mapping out from data.
   */
  public films$: Observable<Film[]>;

  /**
   * Fields for table headers
   */
  public tableHeaders: string[] = ['Ep.', 'Title', 'Release Date', 'Director'];

  constructor(
    private filmsService: FilmsService,
    private authService: AuthService,
  ) {
    this.films$ = this.filmsService.fetchAllFilms().pipe(share());
  }
  /**
   * Returns true if current user is admin
   */
  public get isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}

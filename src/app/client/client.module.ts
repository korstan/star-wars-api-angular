import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

/**
 * Client module
 */
@NgModule({
  declarations: [
    LoginFormComponent,
    FilmsPageComponent,
    FilmDetailsComponent,
    CharacterDetailsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],
})
export class ClientModule { }

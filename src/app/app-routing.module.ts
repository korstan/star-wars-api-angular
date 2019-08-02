import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterDetailsComponent } from './client/character-details/character-details.component';
import { FilmDetailsComponent } from './client/film-details/film-details.component';
import { FilmsPageComponent } from './client/films-page/films-page.component';
import { LoginFormComponent } from './client/login-form/login-form.component';
import { AdminGuard } from './core/guards/admin.guard';
import { UserGuard } from './core/guards/user.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LoginFormComponent },
  {
    path: 'films',
    canActivate: [UserGuard],
    component: FilmsPageComponent,
  },
  {
    path: 'films/:id',
    canActivate: [UserGuard],
    component: FilmDetailsComponent,
  },
  {
    path: 'characters/:id',
    canActivate: [UserGuard],
    component: CharacterDetailsComponent,
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () =>
      import('./admin/admin.module').then(mod => mod.AdminModule),
  },
];
/**
 * Routing module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

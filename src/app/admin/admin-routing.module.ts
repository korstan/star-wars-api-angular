import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserGuard } from '../core/guards/user.guard';

import { AdminFilmEditComponent } from './components/admin-film-edit/admin-film-edit.component';
import { AdminFilmsPageComponent } from './components/admin-films-page/admin-films-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'films',
    canActivate: [UserGuard],
  },
  {
    path: 'films',
    component: AdminFilmsPageComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'films/:id',
    component: AdminFilmEditComponent,
    canActivate: [UserGuard],
  },
];
/**
 * Admin features routing module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }

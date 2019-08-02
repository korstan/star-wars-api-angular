import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminFilmEditComponent } from './components/admin-film-edit/admin-film-edit.component';
import { AdminFilmsPageComponent } from './components/admin-films-page/admin-films-page.component';

/**
 * Admin features module
 */
@NgModule({
  declarations: [AdminFilmsPageComponent, AdminFilmEditComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
})
export class AdminModule {}

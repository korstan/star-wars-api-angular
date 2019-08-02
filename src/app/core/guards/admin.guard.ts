import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
/**
 * Guard for admin's access
 */
@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanLoad {
  public constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  /**
   * Implemented method
   */
  public canLoad(): boolean {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/films']);
      return false;
    }
    return true;
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
/**
 * Guard for user's access
 */
@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanActivate {
  public constructor(private authService: AuthService, private router: Router) {}
  /**
   * Implemented method
   */
  public canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}

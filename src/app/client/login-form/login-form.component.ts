import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthResponseDto } from 'src/app/core/services/dto/auth-response-dto/auth-response-dto';

import { Credentials } from '../../core/models/credentials';
import { AuthService } from '../../core/services/auth/auth.service';

/**
 * Login form component
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnDestroy {
  public constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  /**
   * Utility object to perform ngOnDestroy hook
   */
  private destroy$ = new Subject<AuthResponseDto>();
  /**
   * User autentication's success flag
   */
  private isLoggedIn: boolean;
  /**
   * Email and password for auth
   */
  public credentials: Credentials = new Credentials();
  /**
   * Auth credentials submit function
   * @param credentials User's auth required credentials
   */
  public submit(credentials: Credentials): void {
    this.authService
      .authCredentials(credentials)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        () => {
          this.router.navigate(['/films']);
          this.isLoggedIn = true;
        },
        error => console.log(error),
      );
  }
  /**
   * Hook executes when user logins successful
   */
  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

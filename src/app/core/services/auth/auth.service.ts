import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Credentials } from '../../models/credentials';
import { AuthResponseDto } from '../dto/auth-response-dto/auth-response-dto';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { RefreshResponseDto } from '../dto/refresh-response-dto/refresh-response-dto';

/**
 * Class with functions required for users authentification
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
  ) {}
  /**
   * Auth function. Sends POST-request, returns an ID-Token (required to access database)
   * @param credentials User's auth required credentials
   */
  public authCredentials(
    credentials: Credentials,
  ): Observable<AuthResponseDto> {
    const body = {
      email: credentials.email,
      password: credentials.password,
      returnSecureToken: true,
    };
    return this.http.post<AuthResponseDto>(environment.signInUrl, body).pipe(
      tap(authResponseDto => {
        this.localStorageService.setCurrentEmail(authResponseDto.email);
        this.localStorageService.setIdToken(authResponseDto.idToken);
        this.localStorageService.setRefreshToken(authResponseDto.refreshToken);
      }),
      mapTo(null),
    );
  }
  /**
   * Refresh token function. Sends POST-request, returns fresh ID-token, fresh refresh token and its expiration time span.
   */
  public refreshToken(): Observable<RefreshResponseDto> {
    const body = {
      grant_type: 'refresh_token',
      refresh_token: this.localStorageService.getRefreshToken(),
    };
    return this.http
      .post<RefreshResponseDto>(environment.refreshTokenUrl, body)
      .pipe(
        tap(refreshResponseDto => {
          this.localStorageService.setIdToken(refreshResponseDto.id_token);
          this.localStorageService.setRefreshToken(
            refreshResponseDto.refresh_token,
          );
        }),
        mapTo(null),
      );
  }
  /**
   * Return true if user is authenticated
   */
  public isAuthenticated(): boolean {
    return (
      !!this.localStorageService.getCurrentEmail() &&
      !!this.localStorageService.getIdToken()
    );
  }
  /**
   * Return true if authenticated user is admin
   */
  public isAdmin(): boolean {
    return (
      this.localStorageService.getCurrentEmail() === environment.adminEmail
    );
  }
}

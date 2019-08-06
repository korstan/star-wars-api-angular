import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../auth/auth.service';
import { LocalStorageService } from '../local-storage/local-storage.service';

/**
 * HTTP requests interceptor service
 * Update it every time when new HTTP requests appear in app
 */
@Injectable({
  providedIn: 'root',
})
export class AuthFetchInterceptor implements HttpInterceptor {
  constructor(
    private localStorageService: LocalStorageService,
    private authService: AuthService,
  ) {}
  /**
   * This method intercepts every HTTP request from an app and handle it depending on its content
   * Add new 'if' branch to update method
   * @param req HTTP Request object
   * @param next HTTP Handler object
   */
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Works when accessing database, adds auth idToken to a query
    if (req.url.includes(environment.dbUrl)) {
      return next.handle(this.getActualAuthRequest(req)).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return this.authService
              .refreshToken()
              .pipe(
                switchMap(() => next.handle(this.getActualAuthRequest(req))),
              );
          } else {
            return throwError(error);
          }
        }),
      );
    }
    // Works when signing in or refreshing token. Adds API Token (key) to a query
    if (
      req.url.includes(environment.signInUrl) ||
      req.url.includes(environment.refreshTokenUrl)
    ) {
      const paramReq = req.clone({
        params: req.params.set('key', environment.apiKey),
      });
      return next.handle(paramReq);
    }
    return next.handle(req);
  }
  private getActualAuthRequest(req: HttpRequest<any>): HttpRequest<any> {
    return req.clone({
      params: req.params.set('auth', this.localStorageService.getIdToken()),
    });
  }
}

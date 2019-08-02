import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { LocalStorageService } from '../local-storage/local-storage.service';

/**
 * HTTP requests interceptor service
 * Update it every time when new HTTP requests appear in app
 */
@Injectable({
  providedIn: 'root',
})
export class AuthFetchInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}
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
      const paramReq = req.clone({
        params: req.params.set('auth', this.localStorageService.getIdToken()),
      });
      return next.handle(paramReq);
    }
    // Works when signing in, adds API Token (key) to a query
    if (req.url.includes(environment.signInUrl)) {
      const paramReq = req.clone({
        params: req.params.set('key', environment.apiKey),
      });
      return next.handle(paramReq);
    }
    return next.handle(req);
  }
}

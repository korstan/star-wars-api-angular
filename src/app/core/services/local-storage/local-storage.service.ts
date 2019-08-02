import { Injectable } from '@angular/core';
/**
 * A localstorage manipulating service
 */
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  /**
   * Saves refresh token to local storage with key 'refreshToken'
   * @param refreshToken new refresh token
   */
  public setRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }
  /**
   * Returns saved refresh token from localstorage
   */
  public getRefreshToken(): string {
    return localStorage.getItem('refreshToken');
  }
  /**
   * Saves ID token to local storage with key 'idToken'
   * @param idToken new ID token
   */
  public setIdToken(idToken: string): void {
    localStorage.setItem('idToken', idToken);
  }
  /**
   * Returns saved ID token from localstorage
   */
  public getIdToken(): string {
    return localStorage.getItem('idToken');
  }
  /**
   * setCurrentUsername
   */
  public setCurrentEmail(username: string): void {
    localStorage.setItem('email', username);
  }
  /**
   * getCurrentUsername
   */
  public getCurrentEmail(): string {
    return localStorage.getItem('email');  }
}

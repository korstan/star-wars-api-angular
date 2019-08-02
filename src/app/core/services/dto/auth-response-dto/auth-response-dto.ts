/**
 * DTO for autenticate response from server
 */
export interface AuthResponseDto {
  /**
   * Refresh token. Could be used to refresh auth session.
   */
  refreshToken: string;
  /**
   * ID token. Used to access database.
   */
  idToken: string;
  /**
   * Authenticated user email
   */
  email: string;
}

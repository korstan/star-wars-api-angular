/**
 * DTO for autenticate response from server
 */
export interface RefreshResponseDto {
  /**
   * Refresh token. Could be used to refresh auth session.
   */
  refresh_token: string;
  /**
   * ID token. Used to access database.
   */
  id_token: string;
  /**
   * Refresh token expiration time span
   */
  expires_in: string;
}

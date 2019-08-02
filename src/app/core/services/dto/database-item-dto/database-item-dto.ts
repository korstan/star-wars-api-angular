/**
 * Interface for database's item structure
 */
export interface DatabaseItemDto<T> {
  /**
   * Generic type object. Could be films, people, e.g.
   */
  fields: T;
}

export interface Filter<T> {
  enabled: boolean;
  field: T;
  value: string;
}

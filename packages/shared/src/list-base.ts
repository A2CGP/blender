import { Nullable } from './types';

export interface Link<T = any> {
  prev: Nullable<Link<T>>;
  next: Nullable<Link<T>>;
}

export interface LinkData<T = any> extends Link<LinkData<T>> {
  data: Nullable<T>;
}

export interface ListBase<T = any> {
  first: Nullable<T>;
  last: Nullable<T>;
}

export function createListBase<T = any>(): ListBase<T> {
  return { first: null, last: null };
}

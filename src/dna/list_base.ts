export interface DNALink {
  prev: DNALink;
  next: DNALink;
}

export interface DNALinkData<T = any> {
  prev: DNALinkData<T>;
  next: DNALinkData<T>;
  data: T;
}

export interface DNAListBase<T = any> {
  first: T;
  last: T;
}

export interface DNAID {
  name: string;
  prev: { id: DNAID };
  next: { id: DNAID };
}

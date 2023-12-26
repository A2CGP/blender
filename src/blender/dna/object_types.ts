import { DNAID } from './id';

export enum DNAObjectType {
  Mesh = 1,
}

export interface DNAObject {
  id: DNAID;
  type: DNAObjectType;
  data: { id: DNAID } | null;
}

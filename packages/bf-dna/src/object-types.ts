import { Link, Nullable } from '@blender/shared';

export interface BObjectBase {
  id: BObjectID;
}

export interface BObjectID extends Link<BObjectBase> {
  name: string;
}

export enum BObjectTypeEnum {
  MESH = 1,
}

export interface BObject extends BObjectBase {
  type: BObjectTypeEnum;
  data: Nullable<BObjectBase>;
}

export function createObjectID(name: string): BObjectID {
  return {
    name,
    prev: null,
    next: null,
  };
}

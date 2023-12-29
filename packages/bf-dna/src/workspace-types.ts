import { Link, ListBase } from '@blender/shared';
import { BObjectBase } from './object-types';

export interface BWorkSpaceLayout extends Link<BWorkSpaceLayout> {
  name: string;
}

export interface BWorkSpace extends BObjectBase {
  layouts: ListBase<BWorkSpaceLayout>;
}

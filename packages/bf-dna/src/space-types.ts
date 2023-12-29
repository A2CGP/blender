import { Link, ListBase } from '@blender/shared';
import { BRegion } from './screen-types';

export enum BSpaceTypeEnum {
  VIEW3D = 1,
}

export interface BSpaceLink extends Link<BSpaceLink> {
  type: BSpaceTypeEnum;
  regions: ListBase<BRegion>;
}

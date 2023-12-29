import { Link } from '@blender/shared';

export enum BRegionTypeEnum {
  WINDOW = 0,
  HEADER = 1,
}

export interface BRegion extends Link<BRegion> {
  type: BRegionTypeEnum;
  visible: boolean;
}

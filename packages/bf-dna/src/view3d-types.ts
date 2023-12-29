import * as THREE from 'three';
import { Link, ListBase } from '@blender/shared';
import { BDrawTypeEnum } from './object-enums';
import { BObject } from './object-types';
import { BSpaceLink, BSpaceTypeEnum } from './space-types';
import { BRegion } from './screen-types';

export interface BView3DShading {
  type: BDrawTypeEnum;
}

export interface BRegionView3D {
  projectionMatrix: THREE.Matrix;
  viewMatrix: THREE.Matrix;
}

export interface BView3D extends Link<BSpaceLink> {
  type: BSpaceTypeEnum;
  regions: ListBase<BRegion>;
  camera: BObject;
  center: BObject;
}

import { BObject, BObjectBase } from './object-types';
import { BWorld } from './world-types';

export interface BScene extends BObjectBase {
  camera: BObject;
  world: BWorld;
}

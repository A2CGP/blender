import { BScene, BWorkSpace } from '@blender/bf-dna';

export interface BContext {
  scene: BScene;
  workspace: BWorkSpace;
}

export enum BContextResultEnum {
  OK = 1,
  MEMBER_NOT_FOUND = 0,
  NO_DATA = -1,
}

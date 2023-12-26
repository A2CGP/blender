import { DNAID } from './id';
import { DNAObject } from './object_types';
import { DNAWorld } from './world_types';

export interface DNAScene {
  id: DNAID;
  camera: DNAObject;
  world: DNAWorld;
}

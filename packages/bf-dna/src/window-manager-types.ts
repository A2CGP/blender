import { Link, ListBase, Nullable, createListBase } from '@blender/shared';
import { BObjectBase, createObjectID } from './object-types';
import { BScene } from './scene-types';

export interface BWindow extends Link<BWindow> {
  scene: Nullable<BScene>;
}

export interface BWindowManager extends BObjectBase {
  windows: ListBase<BWindow>;
}

export function createWindowManager(): BWindowManager {
  return {
    id: createObjectID(''),
    windows: createListBase<BWindow>(),
  };
}

import { DNAScene } from '@/blender/dna/scene_types';
import { DNAWorkSpace } from '@/blender/dna/workspace_types';

export interface InternContext {
  scene: DNAScene;
  workspace: DNAWorkSpace;
}

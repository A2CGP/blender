import { DNAScene } from '@/dna/scene_types';
import { DNAWorkSpace } from '@/dna/workspace_types';

export interface InternContext {
  scene: DNAScene;
  workspace: DNAWorkSpace;
}

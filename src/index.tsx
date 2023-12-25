import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Creator } from '@/creator';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Creator />
  </StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@/stores';
import { Header } from '@/components/header';
import { LayoutWorkSpace } from '@/workspaces/layout';
import { StatusBar } from '@/components/status-bar';
import './index.css';

const Creator = () => (
  <StrictMode>
    <Provider store={store}>
      <Header />
      <div className="flex-1">
        <LayoutWorkSpace />
      </div>
      <StatusBar />
    </Provider>
  </StrictMode>
);

export const main = (container: Element) => {
  const root = createRoot(container);

  root.render(<Creator />);
};

import { Provider } from 'react-redux';
import { store } from '@creator/stores';
import { Header } from '@creator/components/header';
import './index.css';

export const Creator = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);

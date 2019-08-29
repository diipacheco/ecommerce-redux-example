import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Global from './styles/Global';
import Header from './components/Header';

import Cart from './components/Cart';

const src = () => (
  <>
    <Provider store={store}>
      <Header />
      <Cart />
      <Global />
    </Provider>
  </>
);

export default src;

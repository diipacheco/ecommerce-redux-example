import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { ProductState } from './Ducks/Products/types';
import reducers from './Ducks/rootReducer';
import sagas from './Ducks/rootSagas';
import { CartState } from './Ducks/Cart/types';

export interface ApplicationState {
  products : ProductState,
  cart: CartState
}

const sagaMiddleware = createSagaMiddleware();


const store:Store<ApplicationState> = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;

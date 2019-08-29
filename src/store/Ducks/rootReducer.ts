import { combineReducers } from 'redux';
import products from './Products';
import cart from './Cart';

const rootReducer = combineReducers({
  products,
  cart,
});

export default rootReducer;

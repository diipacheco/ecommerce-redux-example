/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';


const INITIAL_STATE: CartState = {
    isMenuOpened: false,
    products: [],
    addedItems: [],
};

const reducer: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.HANDLE_CLICK:
    return {
      ...state,
      isMenuOpened: action.payload,

    };

  case CartTypes.ADD_TO_CART:
    return {
       ...state,
       addedItems: [...state.addedItems, action.payload],
       isMenuOpened: true,
    };
   default:

    return state;
  }
};

export default reducer;

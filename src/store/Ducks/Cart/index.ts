import { Reducer } from 'redux';
import { CartState, CartTypes } from './types';


const INITIAL_STATE: CartState = {
    isMenuOpened: false,
};

const reducer: Reducer<CartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.HANDLE_CLICK:
      return {
        isMenuOpened: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

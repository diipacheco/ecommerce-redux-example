import { Reducer } from 'redux';
import { ProductTypes, ProductState } from './types';

const INITIAL_STATE: ProductState = {
   data: [],
   loading: false,
   error: false,

};

const reducer: Reducer<ProductState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductTypes.LOAD_REQUEST:
      return {
        ...state,
        loading: true,

      };
    case ProductTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ProductTypes.LOAD_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    default:
      return state;
  }
};

export default reducer;

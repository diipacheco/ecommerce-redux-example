import { action } from 'typesafe-actions';
import { Product, ProductTypes } from './types';

export const loadRequest = () => action(ProductTypes.LOAD_REQUEST);
export const loadSuccess = (data: Product[]) => action(ProductTypes.LOAD_SUCCESS, { data });
export const loadFailure = () => action(ProductTypes.LOAD_FAILURE);

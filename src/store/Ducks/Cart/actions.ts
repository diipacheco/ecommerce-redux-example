import { action } from 'typesafe-actions';
import { Product } from '../Products/types';
import { CartTypes } from './types';

export const handleClick = (toggle) => action(CartTypes.HANDLE_CLICK, toggle);

export const addToCart = (product:Product) => action(CartTypes.ADD_TO_CART, product);

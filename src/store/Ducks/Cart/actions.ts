import { action } from 'typesafe-actions';
import { CartTypes } from './types';

export const handleClick = (toggle) => action(CartTypes.HANDLE_CLICK, toggle);

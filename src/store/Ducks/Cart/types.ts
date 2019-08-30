import { Product } from '../Products/types';
/**
 * Action Types
 */

export enum CartTypes {
  HANDLE_CLICK = '@comics-store/HANDLE_CLICK',
  ADD_TO_CART = '@comics-store/ADD_TO_CART',
}

export interface addedItems{
  id: number,
  title: string,
  qty: number,
  price: number,
  image: string
}

/**
 * State Types
 */

export interface CartState{
  readonly isMenuOpened: boolean,
  readonly products: Product[]
  readonly addedItems: addedItems[]


}

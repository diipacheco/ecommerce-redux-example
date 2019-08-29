/**
 * Action types
 */

export enum ProductTypes {
    LOAD_REQUEST = '@comics-store/LOAD_REQUEST',
    LOAD_SUCCESS = '@comics-store/LOAD_SUCCESS',
    LOAD_FAILURE = '@comics-store/LOAD_FAILURE',

}

/**
 * Data types
 */

 export interface Product {
   id: number,
   title: string,
   price: number,
   qty: number,
   image: string

 }

 /**
  * State Types
  */

export interface ProductState {
  readonly data: Product[],
  readonly loading: boolean
  readonly error: boolean

}

/**
 * Action Types
 */

export enum CartTypes {
  HANDLE_CLICK = '@comics-store/HANDLE_CLICK'
}

/**
 * State Types
 */

export interface CartState{
  readonly isMenuOpened: boolean
}

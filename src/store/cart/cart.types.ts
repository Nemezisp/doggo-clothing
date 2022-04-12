import { CategoryItem } from "../categories/categories.types";

export enum CART_ACTION_TYPES {
    ADD_CART_ITEM = 'ADD_CART_ITEM',
    REMOVE_CART_ITEM = 'REMOVE_CART_ITEM',
    CLEAR_CART_ITEM = 'CLEAR_CART_ITEM',
    TOGGLE_CART_OPEN = 'TOGGLE_CART_OPEN',
    SET_CART_ITEMS = 'SET_CART_ITEMS'
}

export type CartItem = CategoryItem & {
    quantity: number;
}

export type CartItemsState = {
    cartTotal: number,
    cartCount: number,
    cartItems: CartItem[]
}
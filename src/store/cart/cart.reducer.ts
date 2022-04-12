import { CartItem } from "./cart.types";

import { AnyAction } from "redux";

import { toggleCartOpen, clearItemFromCart, removeItemFromCart, addItemToCart } from "./cart.actions";

export type CartState = {
    readonly cartItems: CartItem[];
    readonly cartOpen: boolean;
    readonly cartCount: number;
    readonly cartTotal: number;
}

export const CART_INITIAL_STATE: CartState = {
    cartItems: [],
    cartOpen: false,
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (
    state = CART_INITIAL_STATE, 
    action: AnyAction
) => {
    if (toggleCartOpen.match(action)) {
        return {
            ...state,
            cartOpen: !state.cartOpen
        }
    }

    if (addItemToCart.match(action)) {
        return {
            ...state,
            ...action.payload
        }
    }

    if (removeItemFromCart.match(action)) {
        return {
            ...state,
            ...action.payload
        }
    }

    if (clearItemFromCart.match(action)) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
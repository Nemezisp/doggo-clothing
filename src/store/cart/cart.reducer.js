import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    cartItems: [],
    cartOpen: false,
    cartCount: 0,
    cartTotal: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.TOGGLE_CART_OPEN:
            return {
                ...state,
                cartOpen: !state.cartOpen
            }
        case CART_ACTION_TYPES.ADD_CART_ITEM:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.REMOVE_CART_ITEM:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.CLEAR_CART_ITEM:
            return {
                ...state,
                ...payload
            }
        default:
            return state;
    }
}
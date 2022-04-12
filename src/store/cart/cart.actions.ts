import { CART_ACTION_TYPES, CartItem, CartItemsState } from "./cart.types";
import { CategoryItem } from "../categories/categories.types";

import { createAction, Action, ActionWithPayload, withMatcher } from '../../utils/reducer/reducer.utils';

const calculateCartCount = (cartItems: CartItem[]) : number => cartItems.reduce((total: number, cartItem) => total + cartItem.quantity, 0)
const calculateCartTotal = (cartItems: CartItem[]) : number => cartItems.reduce((total: number, cartItem) => total + cartItem.quantity * cartItem.price, 0)

const updateCartItemsReducer = (cartItems: CartItem[]) : CartItemsState => {     
    let payload = {
        cartItems,
        cartTotal: calculateCartTotal(cartItems),
        cartCount: calculateCartCount(cartItems)
    }

    return payload
}

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem, removeAll: boolean) : CartItemsState => {
    let tempCartItems = cartItems ? [...cartItems] : []

    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].id === productToRemove.id) {
            if (tempCartItems[i].quantity === 1 || removeAll === true) {
                tempCartItems.splice(i, 1)
            } else {
                tempCartItems[i].quantity--;
            }
        }
    }
    return updateCartItemsReducer(tempCartItems)
}

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem) : CartItemsState => {
    let tempCartItems = cartItems ? [...cartItems] : []

    for (let item of tempCartItems) {
        if (item.id === productToAdd.id) {
            item.quantity++;
            return updateCartItemsReducer(tempCartItems)
        }
    }

    tempCartItems.push({...productToAdd, quantity: 1})

    return updateCartItemsReducer(tempCartItems)
}

export type ToggleCartOpen = Action<CART_ACTION_TYPES.TOGGLE_CART_OPEN>
export type ClearItemFromCart = ActionWithPayload<CART_ACTION_TYPES.CLEAR_CART_ITEM, CartItemsState>
export type RemoveItemFromCart = ActionWithPayload<CART_ACTION_TYPES.REMOVE_CART_ITEM, CartItemsState>
export type AddItemToCart = ActionWithPayload<CART_ACTION_TYPES.ADD_CART_ITEM, CartItemsState>


export const toggleCartOpen = withMatcher((): ToggleCartOpen => 
    createAction(CART_ACTION_TYPES.TOGGLE_CART_OPEN)
)

export const addItemToCart = withMatcher((cartItems: CartItem[], productToAdd: CategoryItem): AddItemToCart => (
    createAction(CART_ACTION_TYPES.ADD_CART_ITEM, addCartItem(cartItems, productToAdd))
))

export const clearItemFromCart = withMatcher((cartItems: CartItem[], productToRemove: CartItem) : ClearItemFromCart => 
    createAction(CART_ACTION_TYPES.CLEAR_CART_ITEM, removeCartItem(cartItems, productToRemove, true))
)

export const removeItemFromCart = withMatcher((cartItems: CartItem[], productToRemove: CartItem): RemoveItemFromCart => 
    createAction(CART_ACTION_TYPES.REMOVE_CART_ITEM, removeCartItem(cartItems, productToRemove, false))
)
import { CART_ACTION_TYPES } from "./cart.types";

const calculateCartCount = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
const calculateCartTotal = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

const updateCartItemsReducer = (cartItems) => {     
    let payload = {
        cartItems,
        cartTotal: calculateCartTotal(cartItems),
        cartCount: calculateCartCount(cartItems)
    }

    return payload
}

const removeCartItem = (cartItems, productToRemove, removeAll) => {
    let tempCartItems = [...cartItems]

    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].id === productToRemove.id) {
            if (tempCartItems[i].quantity === 1 || removeAll === true) {
                tempCartItems.splice(i, 1)
            } else {
                tempCartItems[i].quantity--;
            }
            return updateCartItemsReducer(tempCartItems)
        }
    }
}

const addCartItem = (cartItems, productToAdd) => {
    let tempCartItems = [...cartItems]

    for (let item of tempCartItems) {
        if (item.id === productToAdd.id) {
            item.quantity++;
            return updateCartItemsReducer(tempCartItems)
        }
    }

    tempCartItems.push({...productToAdd, quantity: 1})

    return updateCartItemsReducer(tempCartItems)
}

export const toggleCartOpen = () => (
    {
        type: CART_ACTION_TYPES.TOGGLE_CART_OPEN
    }
)

export const clearItemFromCart = (cartItems, productToRemove) => (
    {
        type: CART_ACTION_TYPES.CLEAR_CART_ITEM,
        payload: removeCartItem(cartItems, productToRemove, true)
    }
)

export const removeItemFromCart = (cartItems, productToRemove) => (
    {
        type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
        payload: removeCartItem(cartItems, productToRemove, false)
    }
)

export const addItemToCart = (cartItems, productToAdd) => (
    {
        type: CART_ACTION_TYPES.ADD_CART_ITEM,
        payload: addCartItem(cartItems, productToAdd)
    }
)
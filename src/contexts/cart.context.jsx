import { createContext, useReducer } from "react";

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCard: () => {},
    clearItemFromCard: () => {}
})

export const CART_ACTION_TYPES = {
    'ADD_CART_ITEM' : 'ADD_CART_ITEM',
    'REMOVE_CART_ITEM' : 'REMOVE_CART_ITEM',
    'CLEAR_CART_ITEM' : 'CLEAR_CART_ITEM',
    'TOGGLE_CART_OPEN' : 'TOGGLE_CART_OPEN'
}

const cartReducer = (state, action) => {
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
            throw new Error(`Unhandled type ${type} in cart reducer`)
    }
}

const INITIAL_STATE = {
    cartItems: [],
    cartOpen: false,
    cartCount: 0,
    cartTotal: 0,
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

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
    const {cartItems, cartOpen, cartCount, cartTotal} = state

    const addItemToCart = (productToAdd) => {
        dispatch ({
            type: CART_ACTION_TYPES.ADD_CART_ITEM,
            payload: addCartItem(cartItems, productToAdd)
        })
    }

    const removeItemFromCart = (productToRemove) => {
        dispatch ({
            type: CART_ACTION_TYPES.REMOVE_CART_ITEM,
            payload: removeCartItem(cartItems, productToRemove, false)
        })
    }

    const clearItemFromCart = (productToRemove) => {
        dispatch ({
            type: CART_ACTION_TYPES.CLEAR_CART_ITEM,
            payload: removeCartItem(cartItems, productToRemove, true)
        })
    }

    const toggleCartOpen = () => {
        dispatch({
            type: CART_ACTION_TYPES.TOGGLE_CART_OPEN
        })
    }

    const value = {cartOpen, toggleCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart, cartCount, cartTotal}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
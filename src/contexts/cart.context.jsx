import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
    let tempCartItems = [...cartItems]

    for (let item of tempCartItems) {
        if (item.id === productToAdd.id) {
            item.quantity++;
            return tempCartItems
        }
    }

    tempCartItems.push({...productToAdd, quantity: 1})
    return tempCartItems
}

const removeCartItem = (cartItems, productToRemove, removeAll) => {
    let tempCartItems = [...cartItems]

    for (let i = 0; i < tempCartItems.length; i++) {
        if (tempCartItems[i].id === productToRemove.id) {
            if (tempCartItems[i].quantity === 1 || removeAll === true) {
                tempCartItems.splice(i, 1)
                return tempCartItems
            } else {
                tempCartItems[i].quantity--;
                return tempCartItems
            }
        }
    }
}

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCard: () => {},
    clearItemFromCard: () => {}
})

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove, false))
    }

    const clearItemFromCard = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove, true))
    }

    const value = {cartOpen, setCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCard}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
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

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}
})

export const CartProvider = ({children}) => {
    const [cartOpen, setCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const value = {cartOpen, setCartOpen, cartItems, addItemToCart}

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}
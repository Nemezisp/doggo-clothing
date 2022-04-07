import {CartLogo, ItemCount, CartIconContainer} from './cart-icon.styles'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartItems} = useContext(CartContext)

    const toggleCartOpen = () => setCartOpen(!cartOpen)

    return (
        <CartIconContainer onClick={toggleCartOpen}>
            <CartLogo className='cart-logo' />
            <ItemCount className='classic-font'>
                {
                    cartItems.reduce((total, item) => {
                        return total = total + item.quantity
                    }, 0)
                }
            </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
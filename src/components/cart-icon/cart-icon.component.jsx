import {CartLogo, ItemCount, CartIconContainer} from './cart-icon.styles'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const CartIcon = () => {
    const {cartOpen, toggleCartOpen, cartCount} = useContext(CartContext)

    const toggleCart = () => toggleCartOpen(!cartOpen)

    return (
        <CartIconContainer onClick={toggleCart}>
            <CartLogo className='cart-logo' />
            <ItemCount className='classic-font'>
                {
                    cartCount
                }
            </ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon
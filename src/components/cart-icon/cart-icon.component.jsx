import  './cart-icon.styles.scss'

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import {ReactComponent as CartLogo} from '../../assets/cart.svg'

const CartIcon = () => {
    const {cartOpen, setCartOpen, cartItems} = useContext(CartContext)

    const toggleCartOpen = () => setCartOpen(!cartOpen)

    return (
        <div className='cart-icon-container' onClick={toggleCartOpen}>
            <CartLogo className='cart-logo' />
            <span className='item-count classic-font'>
                {
                    cartItems.reduce((total, item) => {
                        return total = total + item.quantity
                    }, 0)
                }
            </span>
        </div>
    )
}

export default CartIcon
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'

const CartDropdown = () => {
    const {cartItems, setCartOpen} = useContext(CartContext)
    const navigate = useNavigate()

    const navigateToCheckoutHandler = () => {
        navigate('/checkout')
        setCartOpen(false)
    }

    return(
        <CartDropdownContainer>
            <CartItems className='classic-font'> 
                {cartItems.length ? cartItems.map((item) => 
                                <CartItem key = {item.id} cartItem = {item}/>
                             )
                           : <EmptyMessage>Cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={navigateToCheckoutHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown
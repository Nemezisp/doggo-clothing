import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import {CartDropdownContainer, EmptyMessage, CartItems} from './cart-dropdown.styles'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../store/cart/cart.selector';
import { toggleCartOpen } from '../../store/cart/cart.actions';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const navigateToCheckoutHandler = () => {
        navigate('/checkout')
        dispatch(toggleCartOpen())
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
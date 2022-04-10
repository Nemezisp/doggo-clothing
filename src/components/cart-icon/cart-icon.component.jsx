import {CartLogo, ItemCount, CartIconContainer} from './cart-icon.styles'

import { useSelector, useDispatch } from 'react-redux'

import { selectCartCount } from '../../store/cart/cart.selector'
import { toggleCartOpen } from '../../store/cart/cart.actions'

const CartIcon = () => {
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch();

    const toggleCart = () => dispatch(toggleCartOpen())

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
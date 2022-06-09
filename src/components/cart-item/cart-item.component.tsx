import {CartItemContainer, ItemDetails} from './cart-item.styles'

import { FC, memo } from 'react'

import { CartItem as CartItemT } from '../../store/cart/cart.types'

export type CartItemProps = {
    cartItem: CartItemT
}

const CartItem: FC<CartItemProps> = memo(({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ItemDetails className='classic-font'>
                <span className='name'> {name} </span>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
})

export default CartItem;
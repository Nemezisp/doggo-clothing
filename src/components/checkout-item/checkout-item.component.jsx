import {CheckoutImageContainer, CheckoutItemContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx' 

import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem
    const {addItemToCart, removeItemFromCart, clearItemFromCart} = useContext(CartContext)

    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)

    return (
        <CheckoutItemContainer>
            <CheckoutImageContainer src={imageUrl} alt={`${name}`}/>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan> ${price} </BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem
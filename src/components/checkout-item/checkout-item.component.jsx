import {CheckoutImageContainer, CheckoutItemContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton} from './checkout-item.styles.jsx' 

import { addItemToCart, removeItemFromCart, clearItemFromCart } from '../../store/cart/cart.actions.js'

import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../store/cart/cart.selector.js'

const CheckoutItem = ({cartItem}) => {
    const {imageUrl, name, price, quantity} = cartItem

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

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
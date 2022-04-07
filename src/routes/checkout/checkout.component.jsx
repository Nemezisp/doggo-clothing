import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {CheckoutContainer, CheckoutItemsLabels, CheckoutItemLabel, TotalPriceContainer} from './checkout.styles.jsx'

const Checkout = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <CheckoutContainer className='classic-font'>
            <CheckoutItemsLabels>
                <CheckoutItemLabel>
                    <span>Product</span>
                </CheckoutItemLabel>
                <CheckoutItemLabel>
                    <span>Name</span>
                </CheckoutItemLabel>
                <CheckoutItemLabel>
                    <span>Quantity</span>
                </CheckoutItemLabel>
                <CheckoutItemLabel>
                    <span>Price</span>
                </CheckoutItemLabel>
                <CheckoutItemLabel>
                    <span>Remove</span>
                </CheckoutItemLabel>
            </CheckoutItemsLabels>
                {
                    cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
                }
            <TotalPriceContainer>
                Total: ${
                    cartItems.reduce((total, item) => {
                            return total = total + item.quantity*item.price
                    }, 0)
                }
            </TotalPriceContainer>
        </CheckoutContainer>
    );
}

export default Checkout;
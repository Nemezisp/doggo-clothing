import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import PaymentForm from '../../components/payment-form/payment-form.component';

import { useSelector } from 'react-redux';

import {CheckoutContainer, CheckoutItemsLabels, CheckoutItemLabel, TotalPriceContainer} from './checkout.styles'
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems)
    const cartTotal = useSelector(selectCartTotal)

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
                Total: ${cartTotal}
            </TotalPriceContainer>
            <PaymentForm></PaymentForm>
        </CheckoutContainer>
    );
}

export default Checkout;
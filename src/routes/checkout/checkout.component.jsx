import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss'

const Checkout = () => {
    const {cartItems} = useContext(CartContext)

    return (
        <div className='checkout-container classic-font'>
            <div className='checkout-items-labels'>
                <div className='checkout-item-label'>
                    <span>Product</span>
                </div>
                <div className='checkout-item-label'>
                    <span>Name</span>
                </div>
                <div className='checkout-item-label'>
                    <span>Quantity</span>
                </div>
                <div className='checkout-item-label'>
                    <span>Price</span>
                </div>
                <div className='checkout-item-label'>
                    <span>Remove</span>
                </div>
            </div>
            <div className='checkout-items-container'>
                {
                    cartItems.map(item => <CheckoutItem key={item.id} cartItem={item}/>)
                }
            </div>
            <div className='total-price-container'>
                Total: ${
                    cartItems.reduce((total, item) => {
                            return total = total + item.quantity*item.price
                    }, 0)
                }
            </div>
        </div>
    );
}

export default Checkout;
import {ProductCardContainer, ProductCardName, ProductCardFooter, ProductCardPrice} from './product-card.styles.jsx'

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import { useSelector, useDispatch } from 'react-redux'

import { addItemToCart } from '../../store/cart/cart.actions.js';
import { selectCartItems } from '../../store/cart/cart.selector.js';

const ProductCard = ({product}) => {
    const cartItems = useSelector(selectCartItems)
    const {name, price, imageUrl} = product;
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <ProductCardFooter className='classic-font'>
                <ProductCardName>{name}</ProductCardName>
                <ProductCardPrice>{'$' + price}</ProductCardPrice>
            </ProductCardFooter>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>        
    )

}

export default ProductCard;
import { createSelector } from 'reselect'

import { CartState } from './cart.reducer';

import { RootState } from '../store';

const selectCartReducer = (state: RootState) : CartState => state.cart;

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cart) => cart.cartItems
) 

export const selectCartOpen = createSelector(
    [selectCartReducer],
    (cart) => cart.cartOpen
) 

export const selectCartTotal = createSelector(
    [selectCartReducer],
    (cart) => cart.cartTotal
) 

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cart) => cart.cartCount
) 
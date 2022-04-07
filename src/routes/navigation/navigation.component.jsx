import {Fragment, useContext} from 'react';
import {Outlet} from 'react-router-dom'

import { ReactComponent as DoggoLogo } from '../../assets/logo.svg'
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, LogoContainer, NavLink, NavLinks} from './navigation.styles'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { cartOpen } = useContext(CartContext)
    
    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <DoggoLogo className = 'logo' />
            </LogoContainer>
            <NavLinks>
                <NavLink to='/shop'>
                    SHOP
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                    ) : (
                    <NavLink to='/auth'>
                        SIGN IN
                    </NavLink>
                    )
                }
                <CartIcon />
            </NavLinks>
            {cartOpen ? <CartDropdown /> : null}
        </NavigationContainer>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;
import {Fragment} from 'react';
import {Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux';

import { ReactComponent as DoggoLogo } from '../../assets/logo.svg'

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {NavigationContainer, LogoContainer, NavLink, NavLinks} from './navigation.styles'
import { selectCartOpen } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser)
    const cartOpen = useSelector(selectCartOpen)
    
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
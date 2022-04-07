import styled from 'styled-components'

import {ReactComponent as CartSvg} from '../../assets/cart.svg'

export const CartLogo = styled(CartSvg)`
  width: 70px;
  height: 70px;
`

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 14px;
`
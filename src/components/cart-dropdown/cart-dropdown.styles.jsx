import styled from 'styled-components';

import { BaseButton, GoogleSignInButton, InvertedButton } from '../button/button.styles';

export const CartDropdownContainer = styled.div `
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 75px;
  right: 2vw;
  z-index: 5;

  ${BaseButton}, 
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: 5px;
    font-size: 12px;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`
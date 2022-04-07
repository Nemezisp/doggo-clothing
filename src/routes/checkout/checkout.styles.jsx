import styled from 'styled-components';

export const CheckoutContainer = styled.div `
    width: 80%;   
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`

export const CheckoutItemsLabels = styled.div`
    width:100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    font-size: 16px;

    @media only screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const CheckoutItemLabel = styled.div`
    width: 23%;

    &:last-child {
        width: 8%;
    }
`

export const TotalPriceContainer = styled.div`
    text-align: right;
    width: 100%;
    font-size: 26px;
    margin-top: 20px;
`
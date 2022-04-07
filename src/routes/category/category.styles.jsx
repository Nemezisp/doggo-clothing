import styled from 'styled-components';

export const CategoryPageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 20px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

export const CategoryTitle = styled.h2`
    margin-top: 25px;
    font-size: 28px;
    margin-bottom: 25px;
`
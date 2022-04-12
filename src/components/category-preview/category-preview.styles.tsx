import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const Title = styled.h2`
    font-size: 28px;
    margin-top: 20px;
    margin-bottom: 25px;
    cursor: pointer;
`
export const Preview = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        row-gap: 20px;
    }

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`
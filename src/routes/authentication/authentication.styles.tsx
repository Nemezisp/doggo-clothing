import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    margin: 30px auto;


    @media only screen and (max-width: 1020px) {
       width: 800px;
    }

    @media only screen and (max-width: 820px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        grid-gap: 30px;
    }
`
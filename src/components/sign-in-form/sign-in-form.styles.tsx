import styled from 'styled-components';

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;

    h2 {
        margin: 10px 0;
    }

    @media only screen and (max-width: 480px) {
        width: 300px;
    }
`

export const SignInButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        grid-gap: 20px; 
    }
`
import styled from 'styled-components'

export type BackgroundImageProps = {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const CategoryBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.8;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #4a4a4a;
  }
`

export const CategoryContainer = styled.div`
  min-width: 30%;
  height: 270px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7.5px 15px;
  overflow: hidden;
  box-shadow: 0px 0px 3px 1px grey;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${CategoryBodyContainer} {
      opacity: 0.9;
    } 

  }

  &:first-child {
    margin-right: 7.5px;
  }
  
  &:last-child {
    margin-left: 7.5px;
  }

  @media only screen and (max-width: 768px) {
    flex-basis: 45%;
    height: 220px;
  }

  @media only screen and (max-width: 480px) {
    flex-basis: 100%;
    height: 180px;

    & ${CategoryBodyContainer} {
      padding: 0 15px;
    }

    h2 {
      font-size: 18px;
    }
  }
`
import styled from 'styled-components';
import bg from '../../assets/home-bg.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #b8e5f8;
  background-image: url(${bg});
  background-size: cover;

  .signin-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    height: 100vh;
    img {
      width: 128px;
      height: 80px;
      margin-bottom: 100px;
      margin-top: 80px;
    }
  }
`;
Wrapper.displayName = 'SignInWrapper';

import styled from 'styled-components';

export const LoadingBarWrapper = styled.div`
  width: 656px;
  padding: 12px;
  background: #fff;

  .second-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: #fff;
    height: 15px;

    .second {
      background: #eee;
      &:first-child {
        width: 3%;
        margin-right: 3px;
        margin-left: 0;
      }
      &:last-child {
        width: 40%;
      }
    }
  }

  .loading-block {
    position: relative;
    margin: 22px 2px;
    height: 15px;
    background: #eee;
    overflow: hidden;
    border-radius: 2px;

    ::after {
      content: '';
      position: absolute;
      width: 300px;
      height: 15px;
      animation: sweep linear 0.8s infinite;
      background-image: linear-gradient(
        to top left,
        transparent,
        rgba(255, 255, 255, 0.5),
        rgba(204, 204, 204, 0.1)
      );
    }

    &.first {
      width: 60%;
      margin-top: 0;
    }

    &.third {
      width: 90%;
    }

    &.fourth {
      width: 70%;
      margin-bottom: 0;
    }
  }

  @keyframes sweep {
    0% {
      transform: translateX(-100%);
    }

    /* 50% {
      transform: translateX(150%);
    } */

    100% {
      transform: translateX(150%);
    }
  }
`;

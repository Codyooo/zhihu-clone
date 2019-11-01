import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  height: 34px;
  position: relative;

  .button-ask {
    padding: 2px 12px;
    line-height: 26px;
    margin-left: 18px;
    height: 34px;
    transform-origin: center;
    transition: all linear 0.2s;
    position: absolute;
    right: -21%;
    top: -2%;

    &.hidden {
      transform: scale(0);
    }
  }
`;

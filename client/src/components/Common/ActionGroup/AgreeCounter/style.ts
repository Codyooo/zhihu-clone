import styled from 'styled-components';

export const AgreeCountWrapper = styled.div`
  display: flex;
  width: 132px;
  height: 32px;

  .panel {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    color: #0084ff;
    cursor: pointer;
    border-color: transpanrent;
    font-size: 14px;
    background-color: rgba(0, 132, 255, 0.1);
    :hover {
      background-color: rgba(0, 132, 255, 0.15);
    }
    span {
      margin-left: 4px;
    }

    &.active {
      color: #fff;
      background: #0084ff;
    }
  }

  .agree {
    min-width: 101px;
    margin-right: 2px;
  }

  .oppose {
    width: 34px;
  }
`;

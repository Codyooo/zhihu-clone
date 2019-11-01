import styled from 'styled-components';

export const TabGroupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 222px;
  height: 100%;
  margin-left:24px;
  margin-right:24px;
  .tab-item {
    transition: all.2s;
    padding: 0 17px;
    color: #8590a6;
    height: 48px;
    &__link {
      display: flex;
      align-items: center;
      font-size: 15px;
      height: 100%;
      cursor: pointer;
    }

    &.active {
      .tab-item__link {
        box-shadow: 0 3px 0px 0px #0084ff;
        font-weight: 600;
        color: #444;
      }
    }
    :hover {
      color: #444;
    }
  }
`;

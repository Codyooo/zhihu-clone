import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  min-width: 1032px;
  margin: 0 auto;
  background: #fff;
  position: fixed;
  z-index: 999;
  top: 0;
  width: 100%;

  .outter-wrapper {
    width: 1032px;
    margin: 0 auto;
    height: 52px;

    /* &.hidden {
      overflow: hidden;
    }
    &.active {
      overflow: unset;
    } */

    /* todo overflow hidden 需要知道search focus的状态和右边菜单栏open的状态 */
    .header-switch {
      height: 52px;
      /* overflow: hidden; */
    }
  }

  .inner-wrapper {
    &.hidden {
      transform: translateY(-102%);
    }

    &.active {
      transform: translateY(0);
    }
    transition: transform 0.3s linear;
    display: flex;
    align-items: center;

    padding: 0 16px;
    height: 52px;

    .header-logo {
      height: 30px;
      min-width: 64px;
      cursor: pointer;
    }
  }
`;

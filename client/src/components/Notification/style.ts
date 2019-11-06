import styled from 'styled-components';

interface Props {
  float?: boolean;
}

export const NotificationWrapper = styled.div`
  width: 362px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  position: ${(props: Props) => (props.float ? 'absolute' : 'relatve')};

  .notice-header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid #eee;

    .logo {
      &.active {
        > svg {
          fill: #0084ff;
        }
      }
      display: flex;
      align-items: center;
      justify-content: center;
      width: 33%;
      height: 32px;
      cursor: pointer;

      &.friend {
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        position: relative;

        &::before {
          content: '';
          width: 14px;
          height: 14px;
          background: #fff;
          z-index: 999;
          border-left: 1px solid rgba(26, 26, 26, 0.1);
          border-top: 1px solid rgba(26, 26, 26, 0.1);
          position: absolute;
          top: -14px;
          transform: rotate(45deg);
        }
      }

      svg {
        fill: #8590a6;
        width: 33%;
        pointer-events: none;
      }
    }
  }

  .notice-body {
    height: 360px;
    width: auto;
    overflow: hidden;
    cursor:auto;
  }

  .notice-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #eee;
    height: 40px;
    padding: 0 16px;
    color: #8590a6;
    font-size: 14px;

    .btn-setting {
      display: flex;
      align-items: center;
      :hover {
        svg {
          fill: #76839b;
        }
      }
      svg {
        width: 16px;
      }
    }
    .btn {
      &:hover {
        color: #76839b;
        cursor: pointer;
      }
    }
  }
`;

import styled from 'styled-components';

export const ActionGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .action-area {
    display: flex;
    margin-top: 20px;
  }

  .comment-area {
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
    margin-top: 20px;

    &.show {
      display: block;
    }

    &.hidden {
      display: none;
    }
  }

  .icon-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    margin-left: 30px;

    .action {
      height: 23px;
      margin-right: 30px;
      display: flex;
      align-items: center;
      color: #8590a6;
      svg {
        margin-right: 3px;
      }

      &.action-share {
        margin-left: 18px;
        position: relative;
        .share-box {
          position: absolute;
          top: 55px;
          left: -34px;
          z-index: 1;
        }
      }
      :hover {
        cursor: pointer;
        color: #76839b;
      }

      &.action-collapse {
        margin-left: 40px;
        margin-right: 0;
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

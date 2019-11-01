import styled from 'styled-components';

export const DropDownItemWrappeer = styled.div`
  padding-bottom: 10px;
  .dropdown-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
    margin: 0 12px;
  }
  .button-clear {
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
      color: #0084ff;
      .delete-icon {
        fill: #0084ff;
      }
    }
    .delete-icon {
      fill: #666;
      width: 16px;
      height: 16px;
    }
  }

  ul {
    padding-top: 2px;
    .dropdown-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 35px;
      height: 35px;
      padding-left: 18px;
      font-size: 14px;
      color: #333;
      :hover {
        background: #f7f7f7;
        cursor: pointer;
        .clear-icon-wrapper {
          display: flex;
        }
      }

      .clear-icon-wrapper {
        display: none;
        margin-right: 10px;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
        :hover {
          .clear-icon {
            fill: #0084ff;
          }
        }
        .clear-icon {
          width: 12px;
          height: 12px;
          fill: #666;
        }
      }
    }
  }
`;

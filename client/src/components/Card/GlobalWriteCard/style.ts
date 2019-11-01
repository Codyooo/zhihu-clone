import styled from 'styled-components';

export const GlobalWriteCardWrapper = styled.div`
  width: 296px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: #fff;
  padding: 10px;
  padding-bottom: 4px;
  color: #444;

  .box-container {
    display: flex;
    justify-content: space-around;
    padding-top: 10px;

    height: 88px;

    .box-item {
      font-size: 16px;
      width: 48px;
      height: 52px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      svg {
        margin-bottom: 8px;
      }

      :hover {
        color: #175199;
      }
    }
  }
  .list-container {
    display: flex;
    flex-direction: column;
    .list-item {
      :hover {
        cursor: pointer;
        background: #f6f6f6;
      }
      :first-child {
        border-bottom: 1px solid #eee;
      }
      display: flex;
      align-items: center;
      padding: 10px;
      font-size: 14px;
      color: #8590a6;

      svg {
        width: 18px;
        margin-right: 8px;
      }
      .logo-later {
        width: 24px;
        height: 24px;
        margin-right: 6px;
        margin-left: -3px;
      }
    }
  }
`;

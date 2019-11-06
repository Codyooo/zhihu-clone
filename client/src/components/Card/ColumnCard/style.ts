import styled from 'styled-components';

export const ColumnCardWrapper = styled.div`
  width: 490px;
  height: 384px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);

  .background {
    width: 490px;
    height: 134px;
    object-fit: cover;
  }

  .header {
    display: flex;
    margin: 0 12px;
    justify-content: space-around;
    border-bottom: 1px solid #eee;

    align-items: center;
    height: 110px;
    .info {
      display: flex;
      flex-direction: column;

      .title {
        width: 330px;
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
      }

      .count {
        font-size: 12px;
        color: #999;
        margin-top: 4px;
      }
    }

    .btn-follow {
      width: 102px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border-radius: 3px;
      color: #0084ff;
      background-color: rgba(0, 132, 255, 0.08);
      margin-left: 20px;
    }
  }

  .content-list {
    height: 96px;
    margin: 20px 24px;
    display: block;
    /* display: flex; */
  }
`;

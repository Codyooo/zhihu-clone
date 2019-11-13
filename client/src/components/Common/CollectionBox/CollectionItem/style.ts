import styled from 'styled-components';

export const CollectionItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  .item-inner {
    display: block;
    .item-name {
      font-weight: 700;
    }
    .item-content {
      font-size: 14px;
      color: #8590a6;
      margin-top: 4px;
    }
  }

  .btn-collect {
    width: 76px;
    height: 34px;
    border: 1px solid #0084ff;
    border-radius: 1px;
    text-align: center;
    line-height: 34px;
    color: #0084ff;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
    :hover {
      background: rgba(0, 132, 255, 0.06);
    }
  }
`;

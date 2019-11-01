import styled from 'styled-components';

export const ColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #f6f6f6;

  .col-left {
    box-shadow: 0px 1px 3px rgba(26, 26, 26, 0.1);
    background: #fff;
  }
  .col-right {
    background: #f6f6f6;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width:296px;
    > div {
      margin-bottom: 10px;
    }
  }
`;

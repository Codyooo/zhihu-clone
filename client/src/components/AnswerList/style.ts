import styled from 'styled-components';

export const AnswerListWrapper = styled.div`
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  width: 694px;
  background: #fff;
  min-height: 800px;
  margin-top: 236px;

  .list-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 10px;
    margin:10px 20px;
    border-bottom: 1px solid #eee;
    .count {
      font-weight: 600;
      font-size: 15px;
    }
    .setting {
      color: #666;
      font-size: 14px;
    }
  }
`;

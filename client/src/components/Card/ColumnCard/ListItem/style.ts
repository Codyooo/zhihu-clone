import styled from 'styled-components';

export const ListItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 24px;
  font-size: 15px;
  margin-top: 12px;
  .tag {
    font-size: 12px;
    color: #8590a6;
    background: #f6f6f6;
    border-radius: 5px;
    padding: 0 8px;
    cursor: pointer;
  }

  .content-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1 1;
    margin-left: 12px;
    cursor: pointer;
  }
`;

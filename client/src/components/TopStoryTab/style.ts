import styled from 'styled-components';

export const TopStoryTabWrapper = styled.div`
  width: 694px;
  height: 59px;
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;

  .tab-item {
    color: rgb(26, 26, 26);
    font-size: 16px;
    margin: 0 22px;

    :hover {
      color: #175199;
      cursor: pointer;
    }

    &.active {
      font-weight: 500;
      color: #0084ff;
    }
  }
`;

import styled from 'styled-components';

export const ActionGroupWrapper = styled.div`
  display: flex;
  margin-top: 20px;

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
      :hover {
        cursor: pointer;
        color: #76839b;
      }

      &.action-collapse {
        margin-left: 100px;
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

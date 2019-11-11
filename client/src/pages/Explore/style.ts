import styled from 'styled-components';

export const ExplorePageWrapper = styled.div`
  padding-top: 20px;
  section {
    .title {
      font-weight: 600;
      font-size: 25px;

      display: flex;
      align-items: center;

      svg {
        fill: #0084ff;
        margin-right: 12px;
      }
    }
    .content {
      padding: 24px 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }

    .content-column {
      padding: 24px 0 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 20px;
    }

    .btn-more {
      width: 153px;
      height: 48px;
      padding: 0 14px 0 24px;
      color: #8590a6;
      font-weight: 600;
      font-size: 14px;
      border-radius: 25px;
      background: #fff;
      line-height:48px;
      cursor: pointer;
      margin-left:42%;
      margin-bottom:30px;
    }
  }
`;

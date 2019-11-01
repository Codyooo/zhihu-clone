import styled from 'styled-components';

export const QuestionListItemWrapper = styled.div`
  padding: 20px;
  .title {
    cursor: pointer;
    font-size: 18px;
    color: 1a1a1a;
    font-weight: 600;
    :hover {
      color: #175199;
    }
  }

  .content {
    display: flex;
    align-items: center;
    margin-top:10px;

    img {
      min-width: 190px;
      width: 190px;
      height: 105px;
      border-radius: 4px;
      object-fit: cover;
    }
    .answer-preview {
      cursor: pointer;
      max-height: 100px;
      max-width: 446px;
      line-height:1.67;
      margin-left:18px;
      

      color: #1a1a1a;
      font-size: 15px;
      :hover {
        color: #646464;
      }
      .read-full {
        cursor: pointer;
        color: #175199;
        margin-left: 4px;
        :hover {
          color: grey;
        }
      }
    }
  }
`;

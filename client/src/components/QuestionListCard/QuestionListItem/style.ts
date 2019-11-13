import styled from 'styled-components';

export const QuestionListItemWrapper = styled.div`
  padding: 20px 20px 16px;
  border-bottom: 1px solid #eee;
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
    margin-top: 10px;

    &.content-full {
      animation: mergeIn linear 0.3s;
      flex-direction: column;
      align-items: flex-start;
      .comment-count {
        font-size: 14px;
        color: #8590a6;

        :hover {
          cursor: pointer;
          color: #76839b;
        }
      }
    }

    .img-preview {
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
      line-height: 1.67;
      margin-left: 18px;
      color: #1a1a1a;
      font-size: 15px;

      //多行折叠
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      /* ::after{
        content:'';
        position:absolute;
        width:200px;
        display:block;
        background:red;
        height:10px;
        right:0;
      } */

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

  @keyframes mergeIn {
    0% {
      opacity: 0;
      transform: translateY(-2%);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

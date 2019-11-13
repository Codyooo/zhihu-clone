import styled from 'styled-components';

export const CommentBoxWrapper = styled.div`
  width: 100%;
  /* box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2); */
  

  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding:4px 10px 8px;
    .comment-count {
      display: inline-block;
      font-size: 15px;
      font-weight: 600;
      font-synthesis: style;
      color: #1a1a1a;
    }
    .comment-setting {
      display: inline-block;
      padding: 0 16px;
      font-size: 14px;
      line-height: 32px;
      color: #8590a6;
      text-align: center;
      cursor: pointer;
      background: none;
      border-radius: 3px;
    }

 

    }
  }

  .comment-list {
    height: ${(props: { isModal: boolean }) =>
      props.isModal ? '600px' : '100%'};
    .loading-dot{
      box-shadow:unset;
      margin:0 auto;
      margin-top:20px;
    }

  }


  .comment-editor{
      display:flex;
      padding-right:94px;
      border-top:1px solid #eee;
      height:63px;
      justify-content:space-between;
      align-items:center;
      padding:3px 12px;

      input{
        width:536px;
        border:1px solid #eee;
        border-radius:2px;
        height:36px;
        outline:none;
        padding-left:10px;
        font-size:15px;

        :focus{
          border:1px solid #ccc;
        }

        ::placeholder{
          color:#8590a6;
        }

      }
      .btn-comment{
          width:60px;
          border-radius:2px;
          padding:6px 14px;
          border-color:#0077e6;
          background-color:#0084ff;
          color:#fff;
          cursor: pointer;
          text-align:center;
          font-size:13px;
          :hover{
            background-color:#0077e6;
          }
      }
`;

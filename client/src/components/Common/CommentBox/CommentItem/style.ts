import styled from 'styled-components';

export const CommentItemWrapper = styled.div`
  width: 652px;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px 20px;
  border-bottom: 1px solid #eee;

  .item-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
    width: 100%;
    margin-bottom: 4px;

    .user-info {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      .avatar {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        cursor: pointer;
      }
    }

    .comment-time {
      font-size: 14px;
      color: #8590a6;
    }
  }

  .comment-meta {
    padding-left: 33px;
    .comment-content {
      line-height: 1.6;
      margin-bottom: 6px;
      font-size: 15px;
      text-align: left;
    }
  }

  .comment-footer {
    display: flex;
    padding-left: 33px;
    color: #8590a6;

    .icon-group {
      font-size: 13px;
      display: flex;
      align-items: center;
      margin-right: 14px;
      cursor: pointer;

      svg {
        fill: #8590a6;
        width: 16px;
        height: 16px;
        margin-right: 3px;
      }

      :hover {
        color: #76839b;
        svg {
          fill: #76839b;
        }
      }
    }
    &.dislike {
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

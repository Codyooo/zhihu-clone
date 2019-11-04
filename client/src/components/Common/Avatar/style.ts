import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;


  .user-info {
    display: flex;
    cursor: pointer;
    position: relative;
    padding-bottom: 12px;
 

    .avatar {
      width: 24px;
      height: 24px;
    }

    .name {
      color: #444;
      font-size: 15px;
      font-weight: 600;
      margin-left: 10px;
    }
  }

  .desc {
    color: #646464;
    font-size: 14px;
    width: 98px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-word;
    line-height: 15px;
    margin-left: 2px;
    padding-bottom: 12px;
  }

`;

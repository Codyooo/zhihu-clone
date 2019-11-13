import styled from 'styled-components';

interface Props {
  x?: number;
  y?: number;
  float: boolean;
}

export const UserCardWrapper = styled.div`
z-index:3;
  display: flex;
  padding: 4px 10px 10px;
  flex-direction: column;
  width: 360px;
  height: 200px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  cursor: auto;
  background: #fff;
  position: ${(props: Props) => (props.float ? 'absolute' : 'relative')};
  top: ${(props: Props) => props.y || 0}px;
  left: ${(props: Props) => props.x || 0}px;

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: 90px;
    .user-avatar {
      height: 66px;
      width: 66px;
      border-radius: 2px;
      position: absolute;
      top: -20px;
      left: 10px;
    }

    .display-name {
      font-size: 17px;
      font-weight: 600;
    }
    .desc {
      font-size: 14px;
      min-width: 200px;
      margin-top: 3px;
    }
  }

  .user-job {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    border .logo {
      width: 18px;
      height: 18px;
      margin-right: 4px;
    }
  }

  .user-activity {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 80px;
    .item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &:hover {
        cursor: pointer;
        .title,
        .value {
          color: #175199;
        }
      }
      .title {
        font-size: 15px;
        color: #6a6a6a;
      }
      .value {
        font-size: 16px;
        color: #000;
        font-weight: 600;
        margin-top: 3px;
      }
    }
  }

  .button-group {
    display: flex;
    justify-content: space-around;
    align-items: center;
    button {
      width: 145px;
      height: 32px;
      line-height: 32px;
      &.message {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #888;
        background: #fff;
        border: 1px solid #888;
        :hover {
          background: #f6f6f6;
        }
      }
    }
  }
`;

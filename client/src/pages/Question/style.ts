import styled from 'styled-components';

export const QuestionPageWrapper = styled.div`
  .header-wrapper {
    width: 100%;
    position: absolute;
    left: 0;
    top: 52px;
    display: flex;
    justify-content: flex-start;

    background: #fff;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  }

  .header {
    padding: 20px 20px;
    height: 172px;
    margin-left:15%;
    .tags {
      .tag {
        position: relative;
        display: inline-block;
        height: 30px;
        padding: 0 12px;
        font-size: 14px;
        line-height: 30px;
        color: #0084ff;
        vertical-align: top;
        border-radius: 100px;
        background: rgba(0, 132, 255, 0.1);
        margin-right: 10px;
        cursor: pointer;
        :hover {
          background: rgba(0, 132, 255, 0.15);
        }
      }
    }

    .header-title {
      margin-top: 16px;
      margin-bottom: 4px;
      font-size: 22px;
      font-weight: 600;
      font-synthesis: style;
      line-height: 32px;
      color: #1a1a1a;
    }

    .action-group {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 600px;
      margin-top: 24px;

      .btn {
        height: 34px;
        margin: 0 8px;
        min-width: 96px;
        border-radius: 4px;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        border: 1px solid #0084ff;
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 16px;
          height: 16px;
          margin-right: 4px;
        }

        &-follow {
          background-color: #0084ff;
          color: #fff;
          :hover {
            background-color: #0077e6;
            border-color: #0077e6;
          }
        }

        &-answer {
          background-color: #fff;
          color: #0084ff;
          svg {
            fill: #0084ff;
          }

          :hover {
            background-color: rgba(0, 132, 255, 0.06);
          }
        }

        &-invite {
          color: #8590a6;
          border: 1px solid #8590a6;
          width: 110px;

          :hover {
            background-color: rgba(133, 144, 166, 0.06);
          }
        }
      }

      .icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #8590a6;
        margin: 0 10px;
        cursor: pointer;
        svg {
          margin-right: 4px;
          fill: #8590a6;
        }
        :hover {
          color: #76839b;
        }
      }
    }
  }
`;

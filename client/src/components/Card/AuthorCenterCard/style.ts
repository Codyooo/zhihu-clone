import styled from 'styled-components';

export const AuthorCenterCardWrapper = styled.div`
  width: 296px;
  height: 160px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: #fff;
  padding: 10px;
  color: #8590a6;
  cursor: pointer;

  svg {
    width: 18px;
    height: 18px;
  }

  .creator-header {
    border-bottom: 1px solid #eee;
    padding-bottom: 12px;
    padding-top: 4px;
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;
    .header-title {
      margin: 0 10px;
    }
    .level {
      color: #0084ff;
    }
    .logo-arrow-right {
      width: 25px;
      height: 25px;
      position: absolute;
      right: 1%;
    }
  }

  .stats::after {
    content: '';
    display: block;
    position: absolute;
    height: 70px;
    width: 1px;
    color: #eee;
    background: #eee;
    top: 18px;
    right: 46%;
  }

  .stats {
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    font-size: 11px;
    height: 108px;
    padding: 20px 0;
    .stats-item {
      display: flex;
      flex-direction: column;
      height: 67px;
      justify-content: space-between;
      align-items: center;

      .count {
        font-size: 18px;
        color: #444;
        font-weight: 600;
      }
      .compare {
        display: flex;
        align-items: center;

        .title-compare {
          color: #6385a6;
        }
        .value-compare {
          font-weight: 600;
          color: #1a1a1a;
        }
      }

      svg {
        height: 14px;
        width: 14px;
        fill: rgb(0 132 255);
        margin: 0 2px;
      }
    }
  }
`;

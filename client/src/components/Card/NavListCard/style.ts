import styled from 'styled-components';

export const NavListCardWrapper = styled.div`
  width: 296px;
  height: 256px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  background: #fff;
  padding: 10px;

  svg {
    fill: #8590a6;
    height: 18px;
    width: 18px;
    margin-right: 10px;
  }

  .nav-item {
    justify-content: space-between;
    padding-left: 8px;
    font-size: 14px;
    height: 40px;
    display: flex;
    align-items: center;
    color: #8590a6;
    :hover {
      cursor: pointer;
      background: #f6f6f6;
      .nav-item-count {
        background: #fff;
      }
    }

    .nav-item-title {
      display: flex;
      align-items: center;
    }

    .nav-item-count {
      font-size:13px;
      padding: 4px 12px;
      background: #f6f6f6;
      border-radius:2px;
      margin-right:8px;
    }
  }
`;

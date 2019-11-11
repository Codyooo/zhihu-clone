import styled from 'styled-components';

export const ExploreColumnCardWrapper = styled.div`
  width: 235px;
  height: 313px;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:space-between;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  background:#fff;

  .img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
  }

  .card-title {
    font-weight: 600;
    font-size: 16px;
  }

  .card-count {
    color: #999;
    font-size: 12px;
    margin-top: -14px;
  }
  .card-intro {
    font-size: 14px;
    color: #444;
    text-align:center;
  }

  .card-btn {
    width: 88px;
    height: 34px;
    padding: 0 16px;
    line-height:34px;
    font-size:14px;
    background-color: rgba(0, 132, 255, 0.08);
    border-radius: 3px;
    font-weight: 600;
    color: #0084ff;
    cursor: pointer;
  }
`;

import styled from 'styled-components';

export const CollectionBoxWrapper = styled.div`
  padding: 10px 20px;
  .co-title {
    margin-top: 40px;
    font-weight: 500;
    font-size: 24px;
    color: #1a1a1a;
    text-align: center;
  }
  .co-subtitle {
    margin-top: 4px;
    font-size: 14px;
    color: #8590a6;
    text-align: center;
  }
  .favlist-items {
    max-height: 335px;
    min-height: 140px;
    margin-bottom: 40px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .btn-co-create {
    text-align: center;
    width: 224px;
    height: 34px;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    line-height: 34px;
    background: #0077e6;
    margin: 140px auto 0px;
    :hover {
      border-color: #0077e6;
      background-color: #0077e6;
    }
  }
`;

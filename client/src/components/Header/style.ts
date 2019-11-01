import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    min-width: 1032px;
    margin: 0 auto;

  .outter-wrapper {
    width: 1032px;
    margin: 0 auto;
    height: 52px;

  }

  .inner-wrapper {
    display: flex;
    align-items: center;

    padding: 0 16px;
    height: 52px;

    .header-logo {
      height: 30px;
      min-width: 64px;
      cursor: pointer;
    }
  }
`;

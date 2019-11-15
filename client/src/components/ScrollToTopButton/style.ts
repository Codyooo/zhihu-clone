import styled from 'styled-components';

export const ScrollTopButtonWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #fff;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);

  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #d3d3d3;
    cursor: pointer;
  }

  svg {
    transform: rotate(180deg);
  }
`;

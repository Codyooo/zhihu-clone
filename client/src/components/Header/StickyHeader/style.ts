import styled from 'styled-components';

export const StickyHeaderWrapper = styled.div`
  padding-left: 15px;
  background: transparent;
  height: 52px;
  transition: transform 0.3s linear;
  display: flex;
  /* position: fixed;
  top: 0; */
  background:#fff;
  margin-top: -52px;
  align-items: center;
  justify-content: space-between;

  .header-logo{
      margin-right:20px;
  }

  &.acitve {
    transform: translateY(-100%);
    display: flex;
    visibility: visible;
  }
  &.hidden {
    animation: fadeIn 0.3s;
    transform: translateY(100%);
    visibility: hidden;
  }
`;

import styled from 'styled-components';

export const SearchDropDownWrapper = styled.div`
  &.hidden {
    opacity: 0;
    height: 0;
    visibility:0;
    display:none;
  }
  opacity: 1;
  transition: all linear 0.2s;
  display: block;
  width: 360px;
  height: 450px;
  background: #fff;
  border-radius: 3px;
  padding: 12px 0;

  position: absolute;
  top: 125%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.3);
`;

import styled from 'styled-components';

export const FormWrapper = styled.form`
  position: relative;

  .search-icon {
    position: absolute;
    right: 10px;
    bottom: 8px;
    fill: #8590a6;
  }

  input {
    height: 32px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #eee;
    background: #f6f6f6;
    width: 326px;
    padding: 0 10px;
    transition: all 0.2s;
    font-size: 14px;
    color: #1a1a1a;

    &::placeholder{
      color:#8590a6;
    }

    :focus {
      width: 360px;
      transform: translateX(0px);
    }

    :focus + .search-icon {
      fill: #0084ff;
    }

    :focus + .button-ask {
      color: red !important;
    }
  }
`;

import styled from 'styled-components';

interface Props {
  width: string;
  height: string;
  visible: boolean;
}

export const ModalWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props: Props) => (props.visible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;

  .container {
    height: ${(props: Props) =>
      (props.height && props.height) || 'calc(100vh - 48px)'};
    width: ${(props: Props) => (props.width && props.width) || '650px'};
    background: #fff;
    border-radius: 2px;
    padding: 8px;
    animation: fadeIn 0.3s linear;
    position: relative;
  }

  .btn-close {
    cursor: pointer;
    align-self: flex-start;
    position: absolute;
    right: -50px;
    top: 6px;
    svg {
      fill: #fff;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(2%);
    }

    100% {
      opacity: 100%;
      transform: translateY(0);
    }
  }
`;

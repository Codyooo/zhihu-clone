import styled from 'styled-components';

interface Props {
  x?: number;
  y?: number;
  float?: boolean;
}
export const LoadingWrapper = styled.div`
  position: ${(props: Props) => (props.float ? 'absolute' : 'relative')};
  padding: 20px;
  height: 80px;
  width: 120px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr 1fr; */
  place-items: center center;
  /* justify-items: center;
  align-items: center; */
  /* justify-content: space-around;
  align-items: center; */
  /* grid-template-areas:
    'a b c d'
    'e f g h'
    'i j k l'
    'm n o p'; */
  top: ${(props: Props) => props.y}px;
  left: ${(props: Props) => props.x}px;
  background: #fff;

  .dot {
    width: 6px;
    height: 6px;
    background: #0084ff;
    border-radius: 50%;
    :nth-child(2) {
      background: red;
      animation-delay: 0.1s;
      /* grid-area: f; */
    }

    :nth-child(3) {
      background: palevioletred;
      /* grid-area: k; */
      animation-delay: 0.2s;
    }

    :last-child {
      background: green;
      /* grid-area: p; */
      animation-delay: 0.3s;
    }

    animation: bounce linear 0.7s infinite;
  }

  @keyframes bounce {
    0% {
      transform: translateY(0%);
    }

    25% {
      transform: translateY(100%);
    }

    50% {
      transform: translateY(0%);
    }

    75% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0%);
    }
  }
`;

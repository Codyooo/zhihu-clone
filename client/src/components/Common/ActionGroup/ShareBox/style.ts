import styled from 'styled-components';

interface Props {
  visible?: boolean;
  ref: any;
}

export const ShareBoxWrapper = styled.div`
  width: 134px;
  height: 238px;
  display: ${(props: Props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  background: #fff;
  z-index: 999;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.2);
  padding-top: 10px;

  ::before {
    content: '';
    width: 10px;
    height: 10px;
    transform: rotate(45deg);
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
    position: absolute;
    background: #fff;
    top: -5px;
    z-index: -99;
  }

  .share-btn {
    font-size: 14px;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #8590a6;
    padding: 0 20px;

    :hover {
      background: rgba(26, 26, 26, 0.1);
      :last-child {
        background: unset;
      }
    }
    svg {
      margin-right: 10px;
    }

    &.share-wechat {
    }
  }

  .share-qrcode {
    height: 94px;
    width: 94px;
    object-fit: cover;
  }
`;

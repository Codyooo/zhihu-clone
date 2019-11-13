import React, { forwardRef } from 'react';
import { ShareBoxWrapper } from './style';
import { ReactComponent as LogoLink } from '../../../../assets/copy-link.svg';
import { ReactComponent as LogoWeibo } from '../../../../assets/weibo.svg';
import { ReactComponent as LogoWeichat } from '../../../../assets/wechat.svg';

interface Props {
    visible?: boolean
    ref: any;
}

const ShareBox: React.FC<Props> = forwardRef(({ visible = false }, ref) => {

    return (
        <ShareBoxWrapper ref={ref} className='share-box' visible={visible}>
            <div className="share-btn share-link"><LogoLink />复制链接</div>
            <div className="share-btn share-weibo"><LogoWeibo />新浪微博</div>
            <div className="share-btn share-wechat">  <LogoWeichat /> 微信扫一扫

            </div>

            <img className='share-qrcode' src="https://www.zhihu.com/qrcode?url=https%3A%2F%2Fwww.zhihu.com%2Fanswer%2F891544875%23showWechatShareTip" alt="" />
        </ShareBoxWrapper>
    )
});

export default ShareBox;

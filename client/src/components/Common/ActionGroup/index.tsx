import React from 'react';
import { ActionGroupWrapper } from './style';
import AgreeCounter from './AgreeCounter';

interface Props {

}

const ActionGroup: React.FC<Props> = () => {

    return (
        <ActionGroupWrapper>
            <AgreeCounter />
            <div style={{ marginRight: 40 }}>
                {/* <div className='action-comment'>29条评论</div>
                <div className='action-share'>分享</div>
                <div className='action-favor'>收藏</div>
                <div className='action-appreciate'>感谢</div> */}
            </div>

        </ActionGroupWrapper>
    )
}

export default ActionGroup;

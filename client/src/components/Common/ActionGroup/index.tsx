import React, { Dispatch, SetStateAction } from 'react';
import { ActionGroupWrapper } from './style';
import AgreeCounter from './AgreeCounter';
import CommentsCount from './CommentsCount';
import { ReactComponent as LogoShare } from '../../../assets/share.svg'
import { ReactComponent as LogoStar } from '../../../assets/star.svg'
import { ReactComponent as LogoHeart } from '../../../assets/heart.svg'
import { ReactComponent as LogoArrow } from '../../../assets/arrow-up.svg'

interface Props {
    comments?: number;
    voteCount?: number;
    toggle: () => void;
    collapse: boolean;
}

const ActionGroup: React.FC<Props> = ({ comments, voteCount, toggle, collapse }) => {

    return (
        <ActionGroupWrapper>
            <AgreeCounter voteCount={voteCount} />
            <div className='icon-wrapper' >
                <CommentsCount countNumber={12} handleToggleComments={() => { }} />
                <div className='action action-share'><LogoShare />分享</div>
                <div className='action action-favor'><LogoStar />收藏</div>
                <div className='action action-appreciate'><LogoHeart />感谢</div>
                {collapse && <div className='action action-collapse' onClick={() => toggle()}>收起<LogoArrow /></div>}
            </div>

        </ActionGroupWrapper>
    )
}

export default ActionGroup;

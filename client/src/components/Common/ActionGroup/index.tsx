import React, { Dispatch, SetStateAction, useRef, useEffect } from 'react';
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
    toggle?: () => void;
    collapse?: boolean;
}

// TODO
const ActionGroup: React.FC<Props> = ({ comments, voteCount, toggle, collapse }) => {
    const actionRef = useRef<HTMLDivElement>(null);
    const isBottom = () => {

        // const bottom = positionY + node.clientHeight === window.innerHeight;
        // console.log(positionY,)
        // if (bottom) {
        //     console.log('yeah')
        // }


        // const bottom = node.scrollHeight - node.scrollTop === node.clientHeight;
        // // if (bottom) {
        //     console.log('bottom');
        //     console.log('scrollHeight',node.scrollHeight)
        //     console.log('scrollTop',node.scrollTop)
        //     console.log('clientHeight',node.clientHeight)
        // // }



    }
    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         isBottom();
    //     })
    // })


    return (
        <ActionGroupWrapper ref={actionRef}>
            <AgreeCounter voteCount={voteCount} />
            <div className='icon-wrapper' >
                <CommentsCount countNumber={12} handleToggleComments={() => { }} />
                <div className='action action-share'><LogoShare />分享</div>
                <div className='action action-favor'><LogoStar />收藏</div>
                <div className='action action-appreciate'><LogoHeart />感谢</div>
                {collapse && <div className='action action-collapse' onClick={() => toggle && toggle()}>收起<LogoArrow /></div>}
            </div>

        </ActionGroupWrapper>
    )
}

export default ActionGroup;

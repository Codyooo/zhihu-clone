import React, { Dispatch, SetStateAction, useRef, useEffect, useState } from 'react';
import { ActionGroupWrapper } from './style';
import AgreeCounter from './AgreeCounter';
import CommentsCount from './CommentsCount';
import useOutsideClick from '../../../hooks/useOutsideClick'
import { ReactComponent as LogoShare } from '../../../assets/share.svg'
import { ReactComponent as LogoStar } from '../../../assets/star.svg'
import { ReactComponent as LogoHeart } from '../../../assets/heart.svg'
import { ReactComponent as LogoArrow } from '../../../assets/arrow-up.svg'
import CommentBox from '../CommentBox';
import Modal from '../Modal';
import ShareBox from './ShareBox';
import CollectionBox from '../CollectionBox';

interface Props {
    comments?: number;
    voteCount?: number;
    toggle?: () => void;
    collapse?: boolean;
}

// TODO
const ActionGroup: React.FC<Props> = ({ comments, voteCount, toggle, collapse }) => {
    const actionRef = useRef<HTMLDivElement>(null);
    const [commentsVisible, setCommentsVisible] = useState<boolean>(false);
    const [shareboxVisible, setShareBoxVisible] = useState<boolean>(false);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [like, setLike] = useState<boolean>(false);
    const shareBoxRef = useRef(null);
    useOutsideClick(shareBoxRef, () => setShareBoxVisible(false));

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

    const handleToogleCommentBox = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
        setCommentsVisible(!commentsVisible);
    }


    return (
        <ActionGroupWrapper ref={actionRef}>
            <div className="action-area">
                <AgreeCounter voteCount={voteCount} />
                <div className='icon-wrapper' >
                    <CommentsCount countNumber={12} handleToggleComments={handleToogleCommentBox} />
                    <div className='action action-share' onClick={() => setShareBoxVisible(!shareboxVisible)}><LogoShare />分享
                    <ShareBox ref={shareBoxRef} visible={shareboxVisible} />
                    </div>
                    <div className='action action-favor' onClick={() => setModalVisible(true)}><LogoStar />收藏</div>
                    <div className='action action-appreciate' onClick={() => setLike(!like)}><LogoHeart />{like ? '取消感谢' : '感谢'}</div>
                    {collapse && <div className='action action-collapse' onClick={() => toggle && toggle()}>收起<LogoArrow /></div>}
                </div>
            </div>

            <div className={`comment-area ${commentsVisible ? 'show' : 'hidden'}`}>
                <CommentBox loading={loading} />
            </div>

            <Modal onCancel={() => setModalVisible(false)} visible={modalVisible} width="536px" height="595px">
                <CollectionBox />
            </Modal>
        </ActionGroupWrapper>

    )
}

export default ActionGroup;

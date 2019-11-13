import React from 'react';
import { CommentBoxWrapper } from './style';
import LoadingDot from '../LoadingDot';
import CommentItem from './CommentItem';

interface Props {
    isModal?: boolean;
    loading?: boolean;
}

const CommentBox: React.FC<Props> = ({ isModal = false, loading = true }) => {
    return (
        <CommentBoxWrapper isModal={isModal}>
            <div className="comment-header">
                <div className="comment-count">9 条评论</div>
                <div className="comment-setting">切换为时间排序</div>
            </div>
            <div className="comment-list">
                {loading ? <LoadingDot /> : <div>
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                    <CommentItem />
                </div>}
                {/* render  each comment */}
            </div>
            <div className="comment-editor">
                <input type="text" placeholder='写下你的评论...' />
                <div className='btn-comment' onClick={() => { }}>发布</div>
            </div>
        </CommentBoxWrapper>
    )
}

export default CommentBox;

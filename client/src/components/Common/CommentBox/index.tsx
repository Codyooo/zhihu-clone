import React from 'react';
import { CommentBoxWrapper } from './style';

interface Props {

}

const CommentBox: React.FC<Props> = () => {
    return (
        <CommentBoxWrapper>
            <div className="comment-header">
                <div className="comment-count">9 条评论</div>
                <div className="comment-setting">切换为时间排序</div>
            </div>
            <div className="comment-list">
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

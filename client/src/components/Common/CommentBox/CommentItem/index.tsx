import React from 'react';
import { CommentItemWrapper } from './style';
import { ReactComponent as LogoReport } from '../../../../assets/report.svg';
import { ReactComponent as LogoReply } from '../../../../assets/reply.svg';
import { ReactComponent as LogoLike } from '../../../../assets/like.svg';

interface Props {

}

const CommentItem: React.FC<Props> = () => {


    return (
        <CommentItemWrapper>
            <div className="item-header">
                <div className="user-info">
                    <img src="https://pic4.zhimg.com/v2-af9f4bfd07d2fd88d2c810914b258bce_s.jpg" alt="" className="avatar" />
                    <span>薛祥</span>
                </div>
                <div className="comment-time">1年前</div>
            </div>

            <div className="comment-meta">
                <p className="comment-content">
                    我有个朋友也是这样的！感觉就是思维方式不一样，跟对方讨论真的能明白『为什么』，而这正是我很少想的。。
                    </p>
            </div>
            <div className="comment-footer">
                <div className="icon-group like">
                    <LogoLike /> 20
                </div>
                <div className="icon-group replay">
                    <LogoReply /> 回复
                </div>
                <div className="icon-group dislike">
                    <LogoLike /> 踩
                </div>
                <div className="icon-group report">
                    <LogoReport /> 举报
                </div>

            </div>
        </CommentItemWrapper>
    )
}

export default CommentItem;

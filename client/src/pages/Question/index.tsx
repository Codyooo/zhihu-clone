import React, { useState } from 'react';
import { QuestionPageWrapper } from './style';
import MainLayout from '../../layout/MainLayout';
import history from '../../utils/history';
import AnswerList from '../../components/AnswerList';
import Modal from '../../components/Common/Modal';
import { ReactComponent as LogoPencil } from '../../assets/pencil.svg';
import { ReactComponent as LogoInvite } from '../../assets/invite.svg';
import { ReactComponent as LogoMessage } from '../../assets/message.svg';
import { ReactComponent as LogoShare } from '../../assets/share.svg';
import { ReactComponent as LogoReport } from '../../assets/report.svg';
import CommentBox from '../../components/Common/CommentBox';

interface Props {

}

const Question: React.FC<Props> = () => {
    console.log('history', history);
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const { location: { state } } = history;

    return (
        <MainLayout>
            <QuestionPageWrapper>
                <div className="header-wrapper">
                    <div className='header'>
                        <div className="tags">
                            <p className='tag'>标签1</p>
                            <p className='tag'>标签2</p>
                            <p className='tag'>标签3</p>
                        </div>
                        <div className="header-title">
                            {state.title}
                        </div>
                        <div className="action-group">
                            <div className="btn btn-follow">关注问题</div>
                            <div className="btn btn-answer"> <LogoPencil />写回答</div>
                            <div className="btn btn-invite"><LogoInvite />邀请回答</div>
                            <div className="icon btn-comment" onClick={() => setModalVisible(true)}><LogoMessage />1条评论</div>
                            <div className="icon btn-share"><LogoShare />分享</div>
                            <div className="icon btn-report"><LogoReport />举报</div>
                        </div>
                    </div>
                </div>

                <AnswerList />
                <Modal onCancel={() => setModalVisible(false)} visible={modalVisible}>
                    <CommentBox />
                </Modal>
            </QuestionPageWrapper>
        </MainLayout>
    )
}

export default Question;

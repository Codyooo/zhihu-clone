import React, { useState, useEffect } from 'react'
import { QuestionListItemWrapper } from './style';
import ActionGroup from '../../Common/ActionGroup';
import useToggle from '../../../hooks/useToggle';
import Avatar from '../../Common/Avatar';
import history from '../../../utils/history'


interface Props {
    title: string;
    answerPreview: string;
    answererName: string;
    comments?: number;
    voteCount?: number;
    id: string;
}
interface State {

}

const QuestionListItem: React.FC<Props> = ({ title, answerPreview, answererName, comments, voteCount, id }) => {
    const [fullDoc, setFullDoc] = useState<any>(null);
    const [open, toggleOpen] = useToggle(false);

    const handleShowFullText = (answerId: string): void => {
        //获取全文
        toggleOpen()
    }

    const hanldeGoToQustionPage = () => {
        // window.open(`/question/${id}`, '__blank');
        history.push({
            pathname: `/question/${id}`,
            state: {
                title,
                id
            }
        })
    }

    return (
        <QuestionListItemWrapper>
            <div className='title' onClick={hanldeGoToQustionPage}>{title}</div>
            {open ? <div className='content content-full'>
                <Avatar />
                <p className="comment-count">{`2,103 人赞同了该回答`}</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quas, unde maiores labore  cupiditate numquam debitis quos accusamus at reprehenderit nemo tempore in optio veniam, porro necessitatibus officiis magni sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea soluta inventore eos ducimus explicabo sed, officiis debitis earum error architecto. Debitis voluptate atque iure dolorum temporibus! Repellat, ipsum aperiam.
                </div>
                : <div className='content content-preview'>
                    <img className='img-preview' src="https://pic4.zhimg.com/50/v2-2e57ccea7c402db4e4c2d9eec85f5252_400x224.jpg" alt="image" />
                    <p className='answer-preview'>{`${answererName}: ${answerPreview}...`}<span className='read-full' onClick={() => handleShowFullText('123412')}>阅读全文​</span></p>
                </div>}

            <ActionGroup collapse={open} toggle={toggleOpen} comments={comments} voteCount={voteCount} />

        </QuestionListItemWrapper>
    )
}

export default QuestionListItem;

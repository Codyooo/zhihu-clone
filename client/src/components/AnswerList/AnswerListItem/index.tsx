import React from 'react';
import { AnswerListItemWrapper } from './style';
import Avatar from '../../Common/Avatar';
import ActionGroup from '../../Common/ActionGroup';

interface Props {

}

const AnswerListItem: React.FC<Props> = () => {


    return (
        <AnswerListItemWrapper>

            <div className='content'>
                <Avatar />
                <p className="comment-count">{`2,103 人赞同了该回答`}</p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quas, unde maiores labore  cupiditate numquam debitis quos accusamus at reprehenderit nemo tempore in optio veniam, porro necessitatibus officiis magni sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea soluta inventore eos ducimus explicabo sed, officiis debitis earum error architecto. Debitis voluptate atque iure dolorum temporibus! Repellat, ipsum aperiam.
                </div>
            {/* <ActionGroup collapse={open} toggle={toggleOpen} comments={comments} voteCount={voteCount} /> */}
            <ActionGroup />

        </AnswerListItemWrapper>
    )
}

export default AnswerListItem;

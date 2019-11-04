import React from 'react';
import { ReactComponent as LogoMessage } from '../../../../assets/message.svg'
import { CommentsCountWrapper } from './style'
interface Props {
    countNumber: number;
    handleToggleComments: () => void;
}

const CommentsCount: React.FC<Props> = ({ countNumber, handleToggleComments }) => {


    return (
        <CommentsCountWrapper onClick={handleToggleComments}>
            <LogoMessage />
            {
                countNumber > 0 ? `${countNumber}条评论` : `请天假评论`
            }
        </CommentsCountWrapper>
    )
}

export default CommentsCount;

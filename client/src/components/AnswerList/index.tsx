import React, { useEffect } from 'react';
import { AnswerListWrapper } from './style';
import AnswerListItem from './AnswerListItem';

interface Props {

}

const AnswerList: React.FC<Props> = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const renderListItem = () => {

        return Array(4).fill(1).map((answer,index) => <AnswerListItem key={index}/>);
    }


    return (
        <AnswerListWrapper>
            <div className="list-header">
                <div className="count">84个回答</div>
                <div className="setting">默认排序</div>
            </div>
            <div className="list-content">
                {renderListItem()}

            </div>
        </AnswerListWrapper>
    )
}

export default AnswerList;

import React from 'react'
import { QuestionListCardWrapper } from './style'
import MainLayout from '../../layout/MainLayout';
import QuestionListItem from './QuestionListItem';
interface Props {

}

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, , 10, 11, 12];
const QuestionListCard: React.FC<Props> = () => {


    return (
        <QuestionListCardWrapper>
            {data.map(item => {
                return <QuestionListItem key={item} />
            })}

        </QuestionListCardWrapper>
    )
}

export default QuestionListCard;

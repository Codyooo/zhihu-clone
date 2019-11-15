import React, { useEffect, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { QuestionListCardWrapper } from './style';
import { fetchQAListRequest, fetchQuestionsListRequest } from '../../redux/actions/question';
import QuestionListItem from './QuestionListItem';
import { get } from 'lodash';
import { AppState } from '../../redux/store';
import { QA } from '../../redux/actions/types/question';
import LoadingBar from '../Common/LoaddingBar'

interface StateProps {
    questions: QA[];
    loading: boolean;
}

interface DispatchProps {
    fetchQAListRequest(): void;
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

const QuestionListCard: React.FC<Props> = ({ questions, fetchQAListRequest, loading }) => {

    useEffect(() => {
        fetchQAListRequest();
    }, []);

    useEffect(() => {
        const fetchMore = () => {
            console.log('scrollHeight', document.documentElement.scrollHeight)
            console.log('scrollTop', document.documentElement.scrollTop)
            console.log('innerHeight', window.innerHeight)
        }
        console.log('haha')
        window.addEventListener('scroll', fetchMore);
        return () => window.removeEventListener('scroll', fetchMore)
    })

    const renderList = () =>
        questions.map(question => {
            const { _id, title, description, answer, comments } = question;
            const answerPreview = get(answer, ['content'], '');
            const answererName = get(answer, ['answerer', 'name'], '');
            const voteCount = get(answer, ['voteCount'], 0);
            return <QuestionListItem key={_id} id={_id} answerPreview={answerPreview} answererName={answererName} title={title} comments={comments} voteCount={voteCount} />
        });

    // const renderTest = () => {
    //     const data = {
    //         key1: [111, 222, 333],
    //         key2: [444, 555, 666]
    //     }
    //     return Object.entries(data).map(arr =>
    //         arr[1].map(item => <div key={item}>{item}</div>)
    //     )
    // }


    return (
        <QuestionListCardWrapper>
            {loading ? <LoadingBar /> : renderList()}
        </QuestionListCardWrapper>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        questions: state.question.data,
        loading: state.question.loadding
    }
}


export default connect(mapStateToProps, { fetchQAListRequest })(QuestionListCard);

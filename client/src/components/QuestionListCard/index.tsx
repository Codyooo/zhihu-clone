import React, { useEffect } from 'react';
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

    const renderList = () =>
        questions.map(question => {
            const { _id, title, description, answer, comments } = question;
            const answerPreview = get(answer, ['content'], '');
            const answererName = get(answer, ['answerer', 'name'], '');
            const voteCount = get(answer, ['voteCount'], 0);
            return <QuestionListItem key={_id} answerPreview={answerPreview} answererName={answererName} title={title} comments={comments} voteCount={voteCount} />
        })


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

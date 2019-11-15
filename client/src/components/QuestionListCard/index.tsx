import React, { useEffect, MouseEvent } from 'react';
import { connect } from 'react-redux';
import { QuestionListCardWrapper } from './style';
import { fetchQAListRequest, fetchQAListMoreRequest } from '../../redux/actions/question';
import QuestionListItem from './QuestionListItem';
import { get } from 'lodash';
import { AppState } from '../../redux/store';
import { QA } from '../../redux/actions/types/question';
import LoadingBar from '../Common/LoaddingBar'
import useScrollToBottom from '../../hooks/useScrollToBottom';


interface StateProps {
    questions: QA[];
    loading: boolean;
    moreLoading: boolean;
}

interface DispatchProps {
    fetchQAListRequest(): void;
    fetchQAListMoreRequest(): void
}

interface OwnProps {

}

type Props = StateProps & DispatchProps & OwnProps;

const QuestionListCard: React.FC<Props> = ({ questions, fetchQAListRequest, fetchQAListMoreRequest, loading, moreLoading }) => {

    useEffect(() => {
        fetchQAListRequest();
    }, []);

    useScrollToBottom(() => {
        !moreLoading && fetchQAListMoreRequest();
    })

    const renderList = () =>
        questions.map((question, index) => {
            const { _id, title, description, answer, comments } = question;
            const answerPreview = get(answer, ['content'], '');
            const answererName = get(answer, ['answerer', 'name'], '');
            const voteCount = get(answer, ['voteCount'], 0);
            return <QuestionListItem key={_id + index} id={_id} answerPreview={answerPreview} answererName={answererName} title={title} comments={comments} voteCount={voteCount} />
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
            <div style={{ marginBottom: 20 }}> {moreLoading ? <LoadingBar /> : null}</div>
        </QuestionListCardWrapper>
    )
}

const mapStateToProps = (state: AppState) => {
    return {
        questions: state.question.data,
        loading: state.question.loading,
        moreLoading: state.question.moreLoading
    }
}


export default connect(mapStateToProps, { fetchQAListRequest, fetchQAListMoreRequest })(QuestionListCard);

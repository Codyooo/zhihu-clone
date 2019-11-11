import React from 'react';
import { DetailPageWrapper } from './style';
import { withRouter } from 'react-router-dom';

interface Props {
    history: any
}

const DetailPage: React.FC<Props> = ({ history }) => {
    console.log('history', history);

    return (
        <DetailPageWrapper>

        </DetailPageWrapper>
    )
}

export default withRouter(DetailPage);

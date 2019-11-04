import React from 'react'
import LoadingBar from '../../components/Common/LoaddingBar'
import LoadingDot from '../../components/Common/LoadingDot'
import UserCard from '../../components/Common/UserCard'

interface Props {

}

const ExplorePage: React.FC<Props> = () => {

    return (
        <div>
            ExplorePage
            <LoadingBar></LoadingBar>
            <LoadingDot></LoadingDot>
            <UserCard loading={false} />
        </div>
    )
}

export default ExplorePage;

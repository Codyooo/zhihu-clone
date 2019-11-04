import React, { useState, MouseEvent, ReactHTMLElement } from 'react';
import { AvatarWrapper } from './style';
import LoadingDot from '../LoadingDot';
import UserCard from '../UserCard';

interface Props {
    showUserCard?: boolean;
    user?: any;
}

const Avatar: React.FC<Props> = () => {
    const [cardVisbile, setCardVisible] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [mousePosX, setMousePositionX] = useState<number>(0);

    const handleLoadUserDetail = (event: MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLDivElement;
        element.className === 'name' ? setMousePositionX(30) : setMousePositionX(0);

        // load data
        setCardVisible(true);
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 600);

        console.log('handleLoadUserDetail')
    }

    const handleHideCard = () => {
        console.log('handleHideCard');
        setCardVisible(false);
        setLoading(false);

    }

    const renderUserCard = () =>
        cardVisbile ? <UserCard float loading={loading} x={mousePosX} y={50} /> : null;


    return (
        <AvatarWrapper>
            <div className="user-info" onMouseLeave={handleHideCard}>
                <img
                    className='avatar'
                    src="https://pic2.zhimg.com/50/v2-6d336a71ae670f85c2d6a181fbc30fef_s.jpg"
                    alt=""
                    onMouseEnter={handleLoadUserDetail}

                />
                <div
                    className="name"
                    onMouseEnter={handleLoadUserDetail}


                >doubleq</div>
                {renderUserCard()}
            </div>
            <div className="desc">{`,   我是小猪🐷`}</div>
        </AvatarWrapper>
    )
}

export default Avatar;

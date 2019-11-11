import React from 'react';
import { ExploreColumnCardWrapper } from './style';


interface Props {
    imgUrl: string;
    count: string;
    intro: string;
    title: string
}

const ExploreColumnCard: React.FC<Props> = ({ imgUrl, count, intro, title }) => {
    return (
        <ExploreColumnCardWrapper>
            <img className="img" src={imgUrl} />
            <div className="card-title">
                {title}
            </div>
            <div className="card-count">
                {count}
            </div>
            <div className="card-intro">
                {intro}
            </div>
            <div className="card-btn">
                进入专栏
                </div>
        </ExploreColumnCardWrapper>
    )
}

export default ExploreColumnCard;

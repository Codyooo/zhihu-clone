import React from 'react';
import { ColumnCardWrapper } from './style';
import Button from '../../Common/Button';
import ListItem from './ListItem'

interface CardListItem {
    tagName: string, contentTitle: string
}

interface Props {
    title: string;
    count: string;
    imgUrl: string;
    items: CardListItem[];
}

const ColumnCard: React.FC<Props> = ({ title, count, imgUrl, items, }) => {

    return (
        <ColumnCardWrapper>
            <img className='background' src={imgUrl} alt="" />
            <div className="header">
                <div className="info">
                    <div className="title">{title}</div>
                    <div className="count">
                        {count}
                    </div>

                </div>
                <div className='btn-follow'>关注专题</div>
            </div>
            <div className="content-list ">
                {items.map(({ tagName, contentTitle }) => <ListItem tagName={tagName} contentTitle={contentTitle} />)}
            </div>


        </ColumnCardWrapper>
    )
}

export default ColumnCard;

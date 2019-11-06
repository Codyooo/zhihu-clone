import React from 'react';
import { ListItemWrapper } from './style';

interface Props {
    tagName: string;
    contentTitle: string;
}

const ListItem: React.FC<Props> = ({ tagName, contentTitle }) => {


    return (
        <ListItemWrapper>
            <div className="tag">{tagName}</div>
            <div className="content-title">{contentTitle}</div>
        </ListItemWrapper>
    )
}

export default ListItem;

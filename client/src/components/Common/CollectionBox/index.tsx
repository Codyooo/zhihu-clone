import React from 'react';
import { CollectionBoxWrapper } from './style';
import CollectionItem from './CollectionItem';

interface Props {

}

const CollectionBox: React.FC<Props> = () => {


    return (
        <CollectionBoxWrapper>
            <div className="co-title">
                添加收藏
        </div>
            <div className="co-subtitle">
                请选择你想添加的收藏夹
        </div>
            <div className="favlist-items">
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
                <CollectionItem />
            </div>
            <div className="btn-co-create">
                创建收藏夹
            </div>

        </CollectionBoxWrapper>
    )
}

export default CollectionBox;

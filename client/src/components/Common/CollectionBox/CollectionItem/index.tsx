import React from 'react';
import { CollectionItemWrapper } from './style';

interface Props {

}

const CollectionItem: React.FC<Props> = () => {


    return (
        <CollectionItemWrapper>
            <div className="item-inner">
                <div className="item-name">
                    标题
        </div>
                <div className="item-content">
                    31条内容
        </div>
            </div>
            <div className="btn-collect">
                收藏
        </div>

        </CollectionItemWrapper>
    )
}

export default CollectionItem;

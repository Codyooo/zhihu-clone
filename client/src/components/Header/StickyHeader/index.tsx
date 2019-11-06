import React from 'react';
import { StickyHeaderWrapper } from './style';
import { ReactComponent as Logo } from '../../../assets/home-logo.svg';
import HeaderSearch from '../HeaderSearch';
import TopStoryTab from '../../TopStoryTab';
import history from '../../../utils/history';

interface Props {
    visible: boolean;
}

const StickerHeader: React.FC<Props> = ({ visible }) => {


    return (
        <StickyHeaderWrapper className={`sticky-header ${visible ? 'active' : 'hidden'}`}>
            <Logo className='header-logo' onClick={() => history.push('/')} />
            <TopStoryTab />
            <HeaderSearch />

        </StickyHeaderWrapper>

    )
}

export default StickerHeader;

import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { HeaderWrapper } from './style';
import TabGroup from './TabGroup';
import HeaderSearch from './HeaderSearch';
import { ReactComponent as Logo } from '../../assets/home-logo.svg';
import MenuGroup from './MenuIGroup';
import history from '../../utils/history';
import StickerHeader from './StickyHeader';

interface Props {

}

const Header: React.FC<Props> = () => {
    const [fixedHeader, setFixedHeader] = useState(false);
    const handleSroll = () => {
        window.scrollY > 52 ? setFixedHeader(true) : setFixedHeader(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSroll)
        return () => window.removeEventListener('scroll', handleSroll)
    });

    const renderHeader = () => {
        return (
            <div className="header-switch">
                <div className={`inner-wrapper ${fixedHeader ? 'hidden' : 'active'}`}>
                    <Logo className='header-logo' onClick={() => history.push('/')} />
                    <TabGroup />
                    <HeaderSearch />
                    <MenuGroup />
                </div>
                <StickerHeader visible={fixedHeader} />
            </div>
        )


    }

    return (
        <HeaderWrapper>
            <div className={`outter-wrapper ${fixedHeader ? 'active' : 'hidden'}`}>
                {renderHeader()}

            </div>

        </HeaderWrapper>
    )
}


export default connect(null, null)(Header);

import React from 'react'
import { connect } from 'react-redux';
import { HeaderWrapper } from './style';
import TabGroup from './TabGroup';
import HeaderSearch from './HeaderSearch';
import { ReactComponent as Logo } from '../../assets/home-logo.svg';
import MenuGroup from './MenuIGroup';
import history from '../../utils/history';

interface Props {

}

const Header: React.FC<Props> = () => {

    return (
        <HeaderWrapper>
            <div className="outter-wrapper">
                <div className="inner-wrapper">
                    <Logo className='header-logo' onClick={() => history.push('/')} />
                    <TabGroup />
                    <HeaderSearch />
                    <MenuGroup />
                </div>
            </div>

        </HeaderWrapper>
    )
}


export default connect(null, null)(Header);

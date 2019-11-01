import React from 'react';
import { ReactComponent as AlarmLogo } from '../../../assets/alarm.svg';
import { ReactComponent as MessageLogo } from '../../../assets/sixin.svg';
import { MenuGroupWrapper } from './style';

interface Props {

}

const MenuGroup: React.FC<Props> = () => {

    return (
        <MenuGroupWrapper>
            <AlarmLogo className='menu-item'/>
            <MessageLogo className='menu-item'/>
            <img src="https://pic1.zhimg.com/v2-7fe25b16491e24f089d767f4981f8537_is.jpg" alt="" />
        </MenuGroupWrapper>
    )
}

export default MenuGroup;

import React, { useState, useEffect, MouseEvent, useRef } from 'react';
import { ReactComponent as AlarmLogo } from '../../../assets/alarm.svg';
import { ReactComponent as MessageLogo } from '../../../assets/sixin.svg';
import { MenuGroupWrapper } from './style';
import Notification from '../../Notification';
import { useOutsideClick } from '../../../hooks/useOutsideClick'

interface Props {

}

const MenuGroup: React.FC<Props> = () => {
    const [noticeVisible, setNoticeVisible] = useState<boolean>(false);
    const noticeRef = useRef(null);
    useOutsideClick(noticeRef, () => setNoticeVisible(false))

    const showNotification = () => {
        setNoticeVisible(true);
    }

    return (
        <MenuGroupWrapper>
            <div className="menu-item" onClick={showNotification}>
                <AlarmLogo />
                <Notification float visible={noticeVisible} ref={noticeRef} />
            </div>
            <div className="menu-item">
                <MessageLogo />
            </div>

            <img src="https://pic1.zhimg.com/v2-7fe25b16491e24f089d767f4981f8537_is.jpg" alt="" />
        </MenuGroupWrapper>
    )
}

export default MenuGroup;

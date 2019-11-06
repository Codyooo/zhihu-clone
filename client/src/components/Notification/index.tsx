import React, { MouseEvent, forwardRef } from 'react';
import { NotificationWrapper } from './style';
import { ReactComponent as LogoNotice } from '../../assets/notice.svg';
import { ReactComponent as LogoFriends } from '../../assets/friends.svg';
import { ReactComponent as LogoHeart } from '../../assets/heart.svg';
import { ReactComponent as LogoSetting } from '../../assets/setting.svg';

interface Props {
    float?: boolean;
    visible?: boolean;
}



const Notification: React.FC<Props> = ({ float = false, visible = true }, ref) => {

    const handleLoadList = (event: MouseEvent<HTMLDivElement>) => {
        // console.log('parent',event.currentTarget);
        // console.log('child', ref);
        const parent = event.currentTarget;
        const target = event.target as HTMLDivElement;
        Array.from(parent.children).forEach(child => child.classList.remove('active'));
        target.classList.add('active');
    }



    return (
        !visible ? null : <NotificationWrapper ref={ref} float={float} className='notification-card'>
            <div className="notice-header" onClick={handleLoadList}>
                <div className="logo active">
                    <LogoNotice />
                </div>
                <div className="logo friend">
                    <LogoFriends className='logo-friend' />
                </div>
                <div className="logo">
                    <LogoHeart />
                </div>
            </div>

            <div className="notice-body">

            </div>


            <div className="notice-bottom">
                <div className="btn btn-setting">
                    <LogoSetting />
                    设置
                    </div>
                <div className="btn btn-check">查看全部通知</div>

            </div>
        </NotificationWrapper>
    )
}




export default forwardRef<HTMLDivElement, Props>(Notification);

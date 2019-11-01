import React from 'react';
import { NavListCardWrapper } from './style';
import { ReactComponent as LogoStar } from '../../../assets/star.svg';
import { ReactComponent as LogoFollow } from '../../../assets/follow.svg';
import { ReactComponent as LogoInvitation } from '../../../assets/invitation.svg';
import { ReactComponent as LogoRemain } from '../../../assets/remain.svg';
import { ReactComponent as LogoCommunity } from '../../../assets/community.svg';
import { ReactComponent as LogoCopyright } from '../../../assets/copyright.svg';

interface Props {

}

const NavListCard: React.FC<Props> = () => {


    return (
        <NavListCardWrapper>
            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoStar />
                    我的收藏
                </div>
                <div className="nav-item-count">12</div>
            </div>
            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoFollow />
                    我关注的问题
                </div>
                <div className="nav-item-count">33</div>
            </div>
            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoInvitation />
                    我的邀请
                </div>
                <div className="nav-item-count">0</div>
            </div>

            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoRemain />
                    我的余额
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoCommunity />
                    站务中心
                </div>
            </div>
            <div className="nav-item">
                <div className="nav-item-title">
                    <LogoCopyright />
                    版权服务中心
                </div>
            </div>
        </NavListCardWrapper>
    )
}

export default NavListCard;

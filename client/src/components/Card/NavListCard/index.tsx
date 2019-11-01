import React from 'react'
import { NavListCardWrapper } from './style'

interface Props {

}

const NavListCard: React.FC<Props> = () => {


    return (
        <NavListCardWrapper>
            <div>
                我的收藏
            </div>
            <div>
                我关注的问题
            </div>
            <div>
                我的邀请
            </div>
            <div>
                我的余额
            </div>
            <div>
                站务中心
            </div>
        </NavListCardWrapper>
    )
}

export default NavListCard;

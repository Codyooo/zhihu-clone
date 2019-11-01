import React from 'react'
import { AuthorCenterCardWrapper } from './style';
import { ReactComponent as LogoCreator } from '../../../assets/creator.svg';
import { ReactComponent as LogoArrow } from '../../../assets/arrow-right.svg';
import { ReactComponent as LogoRaise } from '../../../assets/raise.svg';

interface Props {

}

const AuthorCenterCard: React.FC<Props> = () => {


    return (
        <AuthorCenterCardWrapper>
            <div className='creator-header'>
                <LogoCreator /><span className='header-title'>创作者中心</span>
                <span className='level'>Lv 2</span>
                <LogoArrow className='logo-arrow-right' />
            </div>
            <div className="stats">
                <div className="stats-item">
                    <div className="stats-item-title">昨日被阅读数</div>
                    <span className='count'>52</span>
                    <span className="compare">
                        <span className='title-compare'>较前日 </span>
                        <LogoRaise />
                        <span className='value-compare'>38.46%</span>
                    </span>
                </div>

                <div className="stats-item">
                    <div className="stats-item-title"> 昨日获赞同数</div>
                    <span className='count'>2</span>
                    <span className="compare"> <span className='title-compare'>较前日&nbsp;</span> --</span>
                </div>
            </div>

        </AuthorCenterCardWrapper>
    )
}

export default AuthorCenterCard;

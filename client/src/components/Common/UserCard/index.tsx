import React from 'react';
import { UserCardWrapper } from './style';
import Button from '../Button';
import { ReactComponent as LogoMessage } from '../../../assets/message.svg';
import LoadingDot from '../LoadingDot';


interface Props {
    className?: string;
    x?: number;
    y?: number;
    loading: boolean;
    float?: boolean;
}

const UserCard: React.FC<Props> = ({ x, y, loading, float = false }) => {


    return (
        loading ? <LoadingDot x={x} y={30} float={float} /> :
            <UserCardWrapper x={x} y={y} float={float}>
                <div className="user-info">
                    <img src="https://pic2.zhimg.com/v2-4d815813f2c4f3dd9a01ef891cc65060_xl.jpg" alt="" className="user-avatar" />
                    <div className="display-name">陈十二</div>
                    <div className="desc">喜欢看脸，专注美学整形</div>
                </div>
                {/* <div className="user-job">
                美容整形
            </div> */}

                <div className="user-activity">
                    <div className="item">
                        <div className="title">回答</div>
                        <div className="value">140</div>
                    </div>
                    <div className="item">
                        <div className="title">文章</div>
                        <div className="value">10</div>
                    </div>
                    <div className="item">
                        <div className="title">关注者</div>
                        <div className="value">1570</div>
                    </div>
                </div>

                <div className="button-group">
                    <Button>+ 关注她</Button>
                    <Button className="message"><LogoMessage />发私信</Button>
                </div>


            </UserCardWrapper>

    )
}

export default UserCard;

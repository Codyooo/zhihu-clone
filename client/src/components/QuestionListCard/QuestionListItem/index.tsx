import React from 'react'
import { QuestionListItemWrapper } from './style';
import ActionGroup from '../../Common/ActionGroup';

interface Props {
    // title: string;
}

const QuestionListItem: React.FC<Props> = () => {


    return (
        <QuestionListItemWrapper>
            <div className='title'>怎样看待， 前端框架的竞争是否已经变成生态系统的竞争？其他框架生存空间太小?</div>
            <div className='content'>
                <img src="https://pic4.zhimg.com/50/v2-2e57ccea7c402db4e4c2d9eec85f5252_400x224.jpg" alt="image" />
                <p className='answer-preview'>猫咪爱吃蛇： 我也回答一下吧 两年半以前买的保时捷卡宴，120万全下来，贷款五年，每月还14000 订车那天是我老公31岁生日，在我俩穷的吃不上饭的时候，十多年前在北京打拼，没有学历没有背景全靠自己拼，身边… <span className='read-full'>阅读全文​</span></p>
            </div>
            <ActionGroup />
          
        </QuestionListItemWrapper>
    )
}

export default QuestionListItem;

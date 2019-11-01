import React from 'react';
import { GlobalWriteCardWrapper } from './style';
import { ReactComponent as LogoAnswer } from '../../../assets/xiehuida.svg'
import { ReactComponent as LogoArticle } from '../../../assets/xiewenzhang.svg'
import { ReactComponent as LogoIdea } from '../../../assets/xiexiangfa.svg'
import { ReactComponent as LogoLater } from '../../../assets/later.svg'
import { ReactComponent as LogoDraft } from '../../../assets/draft.svg'

interface Props {

}

const GlobalWriteCard: React.FC<Props> = () => {


    return (
        <GlobalWriteCardWrapper>
            <div>
                <div className="box-container">
                    <div className="box-item">
                        <LogoAnswer />
                        写回答

                    </div>
                    <div className="box-item">
                        <LogoArticle />
                        写文章

                    </div>
                    <div className="box-item">
                        <LogoIdea />
                        写想法
                    </div>
                </div>
                <div className='list-container'>
                    <div className="list-item"><LogoLater className='logo-later' />我的稍后答</div>
                    <div className="list-item"><LogoDraft />我的草稿</div>
                </div>
            </div>

        </GlobalWriteCardWrapper>
    )
}

export default GlobalWriteCard;

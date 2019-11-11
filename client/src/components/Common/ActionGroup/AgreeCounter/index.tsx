import React, { useState } from 'react';
import { AgreeCountWrapper } from './style';
import { ReactComponent as LogoUp } from '../../../../assets/agree.svg';
import { ReactComponent as LogoDown } from '../../../../assets/oppose.svg';

interface Props {
    questionId?: string;
    voteCount?: number;
}

const AgreeCounter: React.FC<Props> = ({ voteCount }) => {
 
    const [count, setCount] = useState<number>(() => voteCount || 0);
    const [activeAgree, setActiveAgree] = useState(false);
    const [activeOppose, setActiveOppose] = useState(false);



    const handleAgree = () => {
        if (activeAgree) {
            setActiveAgree(false);
            setCount(count - 1);
            return;
        }
        setCount(count + 1);
        setActiveAgree(true);
        setActiveOppose(false);
    }

    const handlOppose = () => {
        if (activeOppose) {
            setActiveOppose(false);
            setCount(count + 1);
            return;
        }
        setCount(count - 1);
        setActiveAgree(false);
        setActiveOppose(true);
    }

    return (
        <AgreeCountWrapper>
            <div className={`panel agree ${activeAgree ? 'active' : ''}`} onClick={handleAgree}>
                <LogoUp />
                <span>{`${activeAgree ? '已' : ''}赞同 ${count}`}</span>
            </div>
            <div className={`panel oppose ${activeOppose ? 'active' : ''}`} onClick={handlOppose}>
                <LogoDown />
            </div>
        </AgreeCountWrapper>
    )
}

export default AgreeCounter;

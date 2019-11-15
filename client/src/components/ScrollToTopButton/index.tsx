import React from 'react';
import { ScrollTopButtonWrapper } from './style';
import { ReactComponent as LogoArrowUp } from '../../assets/arrow-up.svg';
interface Props {

}

const ScrollTopButton: React.FC<Props> = () => {


    return (
        <ScrollTopButtonWrapper onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <LogoArrowUp />
        </ScrollTopButtonWrapper>
    )
}

export default ScrollTopButton;

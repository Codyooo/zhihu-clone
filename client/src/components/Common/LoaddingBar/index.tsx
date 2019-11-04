import React from 'react'
import { LoadingBarWrapper } from './style';



const LoadingBar: React.FC = () => {
    return (
        <LoadingBarWrapper>
            <div className='loading-block first'></div>
            <div className='second-wrapper'>
                <div className='loading-block second'></div>
                <div className='loading-block second'></div>
            </div>
            <div className='loading-block third'></div>
            <div className='loading-block fourth'></div>
        </LoadingBarWrapper>
    )
}

export default LoadingBar;

import React, { useState } from 'react';
import { MouseEvent } from 'react';
import { TabGroupWrapper } from './style';
import history from '../../../utils/history';
import { switchCase } from '@babel/types';


interface Props {

}

const TabGroup: React.FC<Props> = () => {

    const handleActiveLink = (event: MouseEvent<HTMLDivElement>): void => {
        const parent = event.currentTarget;
        const child = event.target as HTMLDivElement;
        const target = child.parentElement;
        if (child.className.includes('link') && target) {
            Array.from(parent.children).forEach(tab => tab.classList.remove('active'));
            target.classList.add('active');

            if (target.classList.contains('home')) {
                history.push('/');
                return;
            }
            if (target.classList.contains('explore')) {
                history.push('/explore');
                return;
            }
            if (target.classList.contains('answer')) {
                history.push('/question/waiting');
                return;
            }
        }
    }

    return (
        <TabGroupWrapper onClick={handleActiveLink}>
            <div className='tab-item active home'>
                <div className='tab-item__link '>首页</div>
            </div>
            <div className='tab-item explore'>
                <div className='tab-item__link '>发现</div>
            </div>
            <div className='tab-item answer'>
                <div className='tab-item__link'>等你来答</div>
            </div>
        </TabGroupWrapper>
    )
}

export default TabGroup;

import React, { useState, useEffect, useRef } from 'react';
import { MouseEvent } from 'react';
import { TabGroupWrapper } from './style';
import { NavLink } from 'react-router-dom';
import history from '../../../utils/history';


interface Props {

}

const TabGroup: React.FC<Props> = () => {
    const tabRef = useRef<any>(null);

    // 解决refresh highight失效问题
    useEffect(() => {
        if (['/follow', '/hot', '/'].includes(history.location.pathname)) return;
        removeHighlight();
    }, [])

    const removeHighlight = () => {
        const tab = (tabRef.current) as HTMLInputElement;
        if (!tab) return;
        tab.classList.remove('active');
    }
    const addHighlight = (event: MouseEvent<HTMLElement>) => {
        const tab = (tabRef.current) as HTMLInputElement;
        if (!tab) return;
        tab.classList.add('active');
    }

    return (
        <TabGroupWrapper>
            <div className='tab-item'>
                <NavLink onClick={addHighlight} ref={tabRef} to='/' >首页</NavLink>
            </div>
            <div className='tab-item'>
                <NavLink onClick={removeHighlight} to='/explore' exact activeClassName="active">发现</NavLink>
            </div>
            <div className='tab-item answer'>
                <NavLink onClick={removeHighlight} to='/question/waiting' exact activeClassName="active">等你来答</NavLink>
            </div>
        </TabGroupWrapper>
    )
}

export default TabGroup;

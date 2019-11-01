import React, { MouseEvent } from 'react'
import { TopStoryTabWrapper } from './style';
import { NavLink } from 'react-router-dom';
interface Props {

}

const TopStoryTab: React.FC<Props> = () => {
    // const handleTabChange = (event: MouseEvent<HTMLDivElement>): void => {
    //     const parent = event.currentTarget;
    //     const target = event.target as HTMLDivElement;

    //     if (target.className.includes('tab-item') && target) {
    //         Array.from(parent.children).forEach(tab => tab.classList.remove('active'));
    //         target.classList.add('active');

    //         if (target.classList.contains('recommend')) {
    //             history.push('/');
    //             return;
    //         }
    //         if (target.classList.contains('follow')) {
    //             history.push('/follow');
    //             return;
    //         }
    //         if (target.classList.contains('hot')) {
    //             history.push('/hot');
    //             return;
    //         }
    //     }
    // }

    return (
        <TopStoryTabWrapper >
            <NavLink to='/' exact className="tab-item">
                推荐
            </NavLink>
            <NavLink to='/follow' className="tab-item">
                关注
            </NavLink>
            <NavLink to='/hot' className="tab-item">
                热榜
            </NavLink>
        </TopStoryTabWrapper>
    )
}

export default TopStoryTab;

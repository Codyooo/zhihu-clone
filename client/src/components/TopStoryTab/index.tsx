import React, { MouseEvent } from 'react'
import { TopStoryTabWrapper } from './style';
import history from './../../utils/history.js';
interface Props {

}

const TopStoryTab: React.FC<Props> = () => {
    const handleTabChange = (event: MouseEvent<HTMLDivElement>): void => {
        const parent = event.currentTarget;
        const target = event.target as HTMLDivElement;

        if (target.className.includes('tab-item') && target) {
            Array.from(parent.children).forEach(tab => tab.classList.remove('active'));
            target.classList.add('active');

            if (target.classList.contains('recommend')) {
                history.push('/');
                return;
            }
            if (target.classList.contains('follow')) {
                history.push('/follow');
                return;
            }
            if (target.classList.contains('hot')) {
                history.push('/hot');
                return;
            }
        }
    }

    return (
        <TopStoryTabWrapper onClick={handleTabChange}>
            <div className="tab-item recommend active">
                推荐
            </div>
            <div className="tab-item follow">
                关注
            </div>
            <div className="tab-item hot">
                热榜
            </div>
        </TopStoryTabWrapper>
    )
}

export default TopStoryTab;

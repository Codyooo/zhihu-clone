import React from 'react'
import LoadingBar from '../../components/Common/LoaddingBar'
import LoadingDot from '../../components/Common/LoadingDot'
import UserCard from '../../components/Common/UserCard'
import Notification from '../../components/Notification'
import MainLayout from '../../layout/MainLayout'
import ColumnCard from '../../components/Card/ColumnCard'
import { columnCardData, exploreCardData } from '../../mock'
import { ExplorePageWrapper } from './style'
import { ReactComponent as LogoColumn } from '../../assets/column-card.svg'
import { ReactComponent as LogoPen } from '../../assets/pen.svg'
import ExploreColumnCard from '../../components/Card/ExploreColumnCard'


const CardData = {
    title: '双十一倒计时，这份电子产品清单收好',
    count: '20 小时前 10,601,409',
    imgUrl: 'https://pic1.zhimg.com/50/v2-c91438164866dcebff34db046a66e4c0_hd.jpg',
    items: [{
        tagName: '会「幸福」清单',
        contentTitle: '有哪些可以让人感到幸福的数码产品？',

    }, {
        tagName: '「续命」数码装备',
        contentTitle: '2019 年双十一，你有哪些堪称「好物」的电子产品推荐？'
    }, {
        tagName: '要买也要省',
        contentTitle: '2019 年「双十一」，购物平台套路有哪些破解方法？'
    }]
}


const ExplorePage: React.FC = () => {

    return (
        <MainLayout>
            <ExplorePageWrapper>

                <section>
                    <div className="title">
                        <LogoColumn />
                        最新专题
                </div>
                    <div className="content">
                        {columnCardData.map(({ title, imgUrl, items, count }) => {
                            return <ColumnCard key={title} title={title} imgUrl={imgUrl} count={count} items={items} />
                        })}
                    </div>
                    <div className="btn-more">
                        查看更多专题 >
                    </div>

                </section>


                <section>
                    <div className="title">
                        <LogoPen />
                        专栏
                </div>
                    <div className="content-column">
                        {exploreCardData.map(({ title, imgUrl, intro, count }) => {
                            return <ExploreColumnCard key={title} title={title} imgUrl={imgUrl} count={count} intro={intro} />
                        })}
                    </div>
                    <div className="btn-more">
                        查看更多专栏 >
                    </div>
                </section>
            </ExplorePageWrapper>
        </MainLayout>
    )
}

export default ExplorePage;

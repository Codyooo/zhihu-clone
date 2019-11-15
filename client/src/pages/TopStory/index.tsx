import React from 'react'
import QuestionListCard from '../../components/QuestionListCard';
import GlobalWriteCard from '../../components/Card/GlobalWriteCard';
import AuthorCenterCard from '../../components/Card//AuthorCenterCard';
import TopStoryTab from '../../components/TopStoryTab';
import MainLayout from '../../layout/MainLayout';
import { ColumnWrapper } from './style';
import { Route, Switch } from 'react-router-dom';
import CategoryCard from '../../components/Card/CategoryCard/';
import NavListCard from '../../components/Card/NavListCard';
import ScrollTopButton from '../../components/ScrollToTopButton';

interface Props {

}

const TopStoryPage: React.FC<Props> = () => {


    return (
        <MainLayout>
            <ColumnWrapper>
                <div className='col-left'>
                    <TopStoryTab />
                    <Switch>
                        <Route exact path="/follow" render={() => <div>关注</div>} />
                        <Route exact path="/hot" render={() => <div>热榜</div>} />
                        <Route path="/" component={QuestionListCard} />
                    </Switch>

                </div>

                <div className='col-right'>
                    <GlobalWriteCard />
                    <AuthorCenterCard />
                    <CategoryCard />
                    <NavListCard />
                </div>
            </ColumnWrapper>
        </MainLayout>
    )
}

export default TopStoryPage;

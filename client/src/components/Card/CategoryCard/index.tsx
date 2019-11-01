import React, { MouseEvent } from 'react'
import { CategoryCardWrapper } from './style';
import { ReactComponent as LogoLive } from '../../../assets/live.svg'
import { ReactComponent as LogoBookStore } from '../../../assets/bookstore.svg'
import { ReactComponent as LogoRoundTable } from '../../../assets/roundtable.svg'
import { ReactComponent as LogoColumn } from '../../../assets/column.svg'
import { ReactComponent as LogoConsult } from '../../../assets/consult.svg'
interface Props {

}

const CategoryCard: React.FC<Props> = () => {


    return (
        <CategoryCardWrapper >
            <div className="category-item live">
                <LogoLive />
                Live
            </div>
            <div className="category-item book-store">
                <LogoBookStore />
                书店
            </div>
            <div className="category-item round-table">
                <LogoRoundTable />
                圆桌
            </div>
            <div className="category-item column">
                <LogoColumn />
                专栏
            </div>
            <div className="category-item consult">
                <LogoConsult />
                付费咨询
            </div>

        </CategoryCardWrapper>
    )
}

export default CategoryCard;

import React, { Ref } from 'react';
import { SearchDropDownWrapper } from './style';
import DropDownBox from './DropDownBox';

interface Props {
    visible: boolean;
    inputRef: any;
}

const SearchDropDown: React.FC<Props> = ({ visible, inputRef }) => {
    return (
        <SearchDropDownWrapper className={`${visible ? 'hidden' : ''}`}>
            <DropDownBox title='知乎热搜' />
            <DropDownBox title='搜索历史' hasIcon inputRef={inputRef} />
        </SearchDropDownWrapper>
    )
}

export default SearchDropDown;

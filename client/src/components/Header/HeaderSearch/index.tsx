import React, { useState, createRef } from 'react'
import { SearchBarWrapper } from './style'
import SearchInput from './SearchInput'
import Button from '../../Common/Button'

interface Props {

}

const HeaderSearch: React.FC<Props> = () => {
    const [visible, setVisible] = useState(true);

    return (
        <SearchBarWrapper>
            <SearchInput visible={visible} onFocus={() => setVisible(false)} onBlur={() => { setVisible(true) }} />
            <Button className={`button-ask ${visible ? '' : 'hidden'}`} loading={false} >提问</Button>
        </SearchBarWrapper>
    )
}

export default HeaderSearch;

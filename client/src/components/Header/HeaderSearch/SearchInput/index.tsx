import React, { useState, forwardRef, useEffect, ReactNode, useRef } from 'react'
import { FormWrapper } from './style';
import { ReactComponent as SearchIcon } from '../../../../assets/search-icon.svg';
import SearchDropDown from '../SearchDropDown';
import { useInterval } from '../../../../hooks/useInterval';

interface Props {
    onFocus?: () => void;
    onBlur?: () => void;
    visible: boolean;
    children?: ReactNode;
}

const data = ["大疆发布新款无人机", "iOS 13.2 发布", "杜峰成为男篮主帅", "央视主持人大赛", "少年的你郑警官现身", "曝德云社演员退群", "网传小米手表", "令人心动的 offer", "15 岁科学家谈方琳", "日本冲绳首里城大火"]


const SearchInput: React.FC<Props> = (props, ref) => {
    const innerRef = useRef<any>();
    const { onFocus, onBlur, visible } = props;
    const [placeholderValue, setPlaceHolderValue] = useState('');
    const randomTopic = (arr: Array<string>) => {
        return data[Math.floor(Math.random() * arr.length)]
    }


    useInterval(() => {
        setPlaceHolderValue(randomTopic(data));
    }, 2000);


    return (
        <FormWrapper>
            <input placeholder={placeholderValue} type="text" ref={innerRef} onFocus={onFocus} onBlur={onBlur} />
            <SearchIcon className='search-icon' />
            <SearchDropDown visible={visible} inputRef={innerRef} />
        </FormWrapper>
    )
}

export default SearchInput;

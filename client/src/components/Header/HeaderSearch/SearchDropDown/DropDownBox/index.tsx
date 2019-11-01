import React from 'react'
import { DropDownItemWrappeer } from './style';
import { ReactComponent as DeleteButton } from '../../../../../assets/delete-button.svg';
import { ReactComponent as DeleteIcon } from '../../../../../assets/delete-cross.svg';

interface Props {
    title: string;
    hasIcon?: boolean;
    inputRef?: any;
}

const data = ['大疆发布无人机1', '大疆发布无人机2', '大疆发布无人机3', '大疆发布无人机4', '大疆发布无人机5']

const DropDownItem: React.FC<Props> = ({ title, hasIcon = false, inputRef }) => {
    return (
        <DropDownItemWrappeer>
            <div className="dropdown-title">
                {title}
                {hasIcon ? <div className='button-clear' onClick={() => inputRef.current.focus()}>
                    <DeleteButton className='delete-icon' />
                    清空
                </div> : null}
            </div>
            <ul>
                {data.map(topic => <li key={topic} className='dropdown-item'>
                    {topic}
                    {hasIcon ? <div className='clear-icon-wrapper ' onClick={() => inputRef.current.focus()}>
                        <DeleteIcon className='clear-icon' />
                    </div>
                        : null}</li>)}
            </ul>
        </DropDownItemWrappeer>
    )
}

export default DropDownItem;

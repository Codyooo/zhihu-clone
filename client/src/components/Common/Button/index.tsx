import React from 'react';
import styled from 'styled-components';



const CustomButton = styled.button`
    position:relative;
    height:36px;
    width:auto;
    background-color:#0084ff;
    color:#fff;
    font-size:14px;
    border:1px solid #0084ff;
    border-radius:3px;
    text-align:center;
    line-height:36px;
    cursor: pointer;
    outline:none;
    transition: all .3s;

    &.loading{
        pointer-events:none;
        background-color:#eee;
        border:1px solid #ccc;
        cursor:not-allowed;
    }

    :hover{
        border-color: #0077e6;
        background-color: #0077e6;
    }
`

const ProgressBar = styled.div`
    width:25px;
    height:25px;
    border-radius:100%;
    border:3px solid #0084ff;
    border-top-color:#fff;
    animation: spin 1s linear infinite;
    position:absolute;
    left:45%;
    bottom:2px;


    @keyframes spin {
        0%{
            transform:rotate(0);
        }
        100%{
            transform:rotate(360deg);
        }
    }
`

interface Props {
    type?: "button" | "submit" | "reset",
    width?: number;
    loading?: boolean;
    className?: string;
    children: React.ReactNode
}

const Button: React.SFC<Props> = ({ children, type = "button", loading = false, width = 'auto', className = "" }) => {
    return (
        <CustomButton type={type} className={`${loading ? `loading ${className}` : `${className}`}`}>
            {loading ? <ProgressBar /> : children}
        </CustomButton>
    )
}

export default Button;

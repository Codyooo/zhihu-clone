
import styled from 'styled-components';

export const Wrapper = styled.div`
    width:300px;
    box-shadow:0 1px 3px 0 rgba(0,0,0,.1);
    border-radius:4px;
    background-color:#fff;
    padding:20px 30px;

    pre{
        background:#000;
        color:#fff;
        margin-top:20px;
    }

    form{
        display:flex;
        flex-direction:column;
        position:relative;

        input{
            height:48px;
            border:none;
            outline:none;
            border-bottom:1px solid #eee;
            padding:0 20px;
            font-size:14px;
            font-weight:400;

            &.error{
                ::placeholder{
                color:#f1403c;
             }
            }
        }
        button{
            margin-top:12px;
        }

        .network-error{
            position:absolute;
            color:palevioletred;
            bottom:43%;
            right:13%;
            font-size:11px;
        }

        .button-toogle-password{
            color:#8590a6;
            cursor: pointer;
            position:absolute;
            bottom:62px;
            right:4px;
        }
    }
`
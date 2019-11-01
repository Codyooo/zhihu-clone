import styled from 'styled-components';

export const MenuGroupWrapper = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:center;
    width:268px;
    height:31px;
    margin-left:70px;
    img{
        height:30px;
        width:30px;
        cursor: pointer;
    }
    .menu-item{
        margin-right:40px;
        cursor: pointer;
        :hover{
            fill:#76839b;
        }
    }

`
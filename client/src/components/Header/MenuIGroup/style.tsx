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
        position: relative;
        margin-right:40px;
        cursor: pointer;
        .notification-card{
            top:41px;
            left:-170px;
            z-index:88;
        }
        :hover{
            >svg{
                fill:#76839b;
            }
     
        }
    }

`
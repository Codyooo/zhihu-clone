import React, { ReactElement } from 'react'
import styled from 'styled-components';
import ScrollTopButton from '../components/ScrollToTopButton';


const Container = styled.div`
    background:#F6F6F6;
    margin:0 auto;
    margin-top:62px;
    width:1000px;
   
`

interface Props {
    children?: any;
}

const MainLayout: React.FC<Props> = ({ children }) => {

    return (
        <Container>
            {children}

        </Container>
    )
}

export default MainLayout;

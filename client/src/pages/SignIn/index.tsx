import React from 'react';
import { Wrapper } from './style';
import SignIn from '../../components/Form/SignIn';
import logo from '../../assets/zhihu-logo.png';

const SignInPage: React.SFC = () => {
    return <Wrapper>
        <div className="signin-container">
            <img src={logo} alt="" />
            <SignIn />
        </div>
    </Wrapper>
}

export default SignInPage;

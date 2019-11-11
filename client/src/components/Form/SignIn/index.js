import React, { useState } from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { userSignInRequest, userSignUpRequest } from '../../../redux/actions/account';
import { Wrapper } from './style';
import { withFormik, Form, Field, FormikValues, FormikProps, FormikErrors, InjectedFormikProps } from 'formik';
import { withRouter } from 'react-router-dom';

import { compose } from 'redux';
import Button from '../../Common/Button';

import { ReactComponent as Eye } from '../../../assets/eye.svg';
import { ReactComponent as EyeClosed } from '../../../assets/eye-closed.svg';

// interface IProps {
//     values: number,
//     errors: any,
//     account: any,
//     userSignInRequest: () => {},
// }

// interface FormValues {
//     name: string,
//     password: string
// }

const SignIn = (props) => {
    const { errors, account } = props;
    const [visible, setVisible] = useState(false);
    const { isLoading, error: netWorkError } = account;

    return (
        <Wrapper>
            <Form>
                {/* {errors.phone ? <p>{errors.phone}</p> : null}
                {errors.password ? <p>{errors.password}</p> : null} */}
                {netWorkError && <p className='network-error'>{netWorkError}</p>}
                <Field
                    name="name"
                    className={`input-phone ${errors.name ? 'error' : ''}`}
                    placeholder={errors.name ? errors.name : '手机号或邮箱'}
                />
                <Field
                    name="password"
                    className={`input-password ${errors.password ? 'error' : ''}`}
                    type={visible ? "text" : "password"}
                    placeholder={errors.password ? errors.password : '密码'}
                />
                <div className='button-toogle-password' onClick={() => setVisible(!visible)}>
                    {visible ? <Eye /> : <EyeClosed />}
                </div>
                <Button loading={isLoading} type='submit'>注册/登录</Button>
                {/* <TextField></TextField> */}
            </Form>

            <pre> {JSON.stringify({ ...props.values, ...props.account }, null, 2)}</pre>
            {/* <Counter>
                {({ count, setCount }) => (
                    <div id='test'>
                        <pre>{count}</pre>
                        <button onClick={() => setCount(count + 1)}>++</button>
                    </div>
                )}
            </Counter> */}
        </Wrapper>
    )
}
const formikConfig = {
    mapPropsToValues: ({ name, password }) => ({
        name: name || "doubleq",
        password: password || "doubleq"
    }),

    handleSubmit: (values, { props: { userSignInRequest } }) => {
        userSignInRequest(values)
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required('请输入手机号或邮箱').typeError(''),
        password: Yup.string().min(2, '密码不能小于2位').required('请输入密码')
    }
    )
}

const mapStateToProps = (state) => ({
    account: state.account
});


export default compose(connect(mapStateToProps, { userSignInRequest, userSignUpRequest }), withFormik(formikConfig))(SignIn);


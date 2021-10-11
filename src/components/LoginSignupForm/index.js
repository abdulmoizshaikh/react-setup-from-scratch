import React, { useState } from 'react';
import { Form, Input, Button, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
import * as images from 'images/assets';

const LoginSignupForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [displayTxt, setDisplayTxt] = useState('Sign In');

  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  const toggleModal = () => {
    if (isSignUp) {
      setDisplayTxt('Sign In');
      setIsSignUp(false);
    } else {
      setDisplayTxt('Sign Up');
      setIsSignUp(true);
    }
  };

  return (
    <AntdForm
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>

      {isSignUp && (
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>
      )}

      <Form.Item>
        <LoginButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          {displayTxt}
        </LoginButton>
      </Form.Item>

      <AntdDivider>Or</AntdDivider>

      <Form.Item>
        <FacebookButton
          type="primary"
          htmlType="submit"
          className="login-form-button"
        >
          <FacebookLogo className="fa fa-facebook-square" />
          {displayTxt} with Facebook
        </FacebookButton>
      </Form.Item>

      <Form.Item>
        <GoogleButton htmlType="submit">
          <img
            src={images.googleLogo}
            alt="google logo"
            style={{ width: '20px', height: '20px', marginRight: '5px' }}
          />
          {displayTxt} with Google
        </GoogleButton>
      </Form.Item>

      <TermAndCondition>
        By continuing to use Bot connect, you agree to our Terms and Privacy
        Policy.
      </TermAndCondition>

      <Footer>
        Already have an account?
        <div
          onClick={toggleModal}
          onKeyDown={toggleModal}
          role="button"
          tabIndex={0}
        >
          <p>{isSignUp ? 'Sign In' : 'Sign Up'}</p>
        </div>
      </Footer>
    </AntdForm>
  );
};

export default LoginSignupForm;

const AntdForm = styled(Form)`
  * p {
    color: ${themeColor.black};
    margin: 0px;
  }
`;

const LoginButton = styled(Button)`
  width: 100%;
  background-color: ${themeColor.orange} !important;
  border-color: ${themeColor.orange} !important;
  text-transform: uppercase;
`;
const FacebookButton = styled(Button)`
  width: 100%;
  background-color: ${themeColor.fbBtnBC} !important;
  border-color: ${themeColor.fbBtnBC} !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FacebookLogo = styled.i`
  font-size: 20px !important;
  margin-right: 10px;
`;

const GoogleButton = styled(Button)`
  width: 100%;
`;

const TermAndCondition = styled.p`
  color: ${themeColor.black};
  text-align: center;
  font-size: 12px;
`;

const AntdDivider = styled(Divider)`
  border-top-color: ${themeColor.black} !important;
  font-size: 10px !important;
`;

const Footer = styled.div`
  display: flex;
  font-size: 12px;
  justify-content: center;
  > div > p {
    font-weight: 500;
    margin-left: 5px;
    cursor: pointer;
  }
`;

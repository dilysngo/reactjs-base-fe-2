import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, Form } from 'antd';
import './styles.scss';
import Input from 'widgets/Input';
import FormItem from 'widgets/FormItem';
import AuthWrapper from 'modules/auth/components/AuthWrapper';
import AuthCard from 'modules/auth/components/AuthCard';
import ButtonPrimary from 'widgets/ButtonPrimary';
import VerifyCode from 'modules/auth/components/VerifyCode';

const Signup = () => {
  const [form] = Form.useForm();
  const [view, setView] = useState('authen');
  const onFormSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      setView('authen');
    });
  };
  return (
    <AuthWrapper>
      {view === 'login' ? (
        <AuthCard className="form-signup">
          <h2>Sign up your account</h2>
          <Form layout="vertical" form={form} onFinish={onFormSubmit}>
            <FormItem
              label={<span>Email</span>}
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please enter email field',
                },
              ]}
            >
              <Input placeholder="example@gmail.com" />
            </FormItem>
            <FormItem
              label={<span>Password</span>}
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please enter password field',
                },
              ]}
            >
              <Input placeholder="**********" type="password" />
            </FormItem>
            <FormItem
              label={<span>Confirm Password</span>}
              name="confirm"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input placeholder="**********" type="password" />
            </FormItem>
            <FormItem label={<span>Referral code (Optional)</span>} name="referral">
              <Input placeholder="123456" />
            </FormItem>
            <FormItem
              className="form-item-checkbox"
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) => (value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement'))),
                },
              ]}
            >
              <Checkbox>
                I have read and agree to <a href="/#">User Agreement and Privacy Policy</a>
              </Checkbox>
            </FormItem>

            <FormItem>
              <ButtonPrimary type="submit" size="larger" className="form-action">
                Sign Up
              </ButtonPrimary>
            </FormItem>
          </Form>
          <div className="form-links">
            <span>Already have Account.</span>
            <Link to="/login">Login</Link>
          </div>
        </AuthCard>
      ) : (
        <VerifyCode />
      )}
    </AuthWrapper>
  );
};

export default Signup;

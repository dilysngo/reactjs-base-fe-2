import React, { useState } from 'react';
import './styles.scss';
import { Form } from 'antd';
import AuthWrapper from 'modules/auth/components/AuthWrapper';
import AuthCard from 'modules/auth/components/AuthCard';
import Input from 'widgets/Input';
import FormItem from 'widgets/FormItem';
import ButtonPrimary from 'widgets/ButtonPrimary';
import { Link } from 'react-router-dom';
import AuthenCode from 'modules/auth/components/AuthenCode';

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const [view, setView] = useState('login');

  const onFormSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
      setView('authen');
    });
  };

  return (
    <AuthWrapper>
      {view === 'login' ? (
        <AuthCard className="form-login">
          <h2>Forgot Password</h2>
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
            <FormItem>
              <ButtonPrimary type="submit" size="larger" className="form-action">
                Send Email
              </ButtonPrimary>
            </FormItem>
          </Form>
          <div className="form-links">
            <Link to="/reset-password">Reset Password</Link>
            <Link to="/login">Log In</Link>
          </div>
        </AuthCard>
      ) : (
        <AuthenCode />
      )}
    </AuthWrapper>
  );
};

export default ForgotPassword;

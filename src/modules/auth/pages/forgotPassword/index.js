import React from 'react';
import './styles.scss';
import { Form } from 'antd';
import AuthWrapper from 'modules/auth/components/AuthWrapper';
import AuthCard from 'modules/auth/components/AuthCard';
import Input from 'widgets/Input';
import FormItem from 'widgets/FormItem';
import ButtonPrimary from 'widgets/ButtonPrimary';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const onFormSubmit = () => {
    form.validateFields().then((values) => {
      console.log(values);
    });
  };
  return (
    <AuthWrapper>
      <AuthCard className="forgot-password">
        <h2>Login to your account</h2>
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
          <FormItem>
            <ButtonPrimary type="submit" size="larger" className="form-action">
              Login
            </ButtonPrimary>
          </FormItem>
        </Form>
        <div className="form-links">
          <Link to="/forgot-password">Forgot Password</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      </AuthCard>
    </AuthWrapper>
  );
};

export default ForgotPassword;

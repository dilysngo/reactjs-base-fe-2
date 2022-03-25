import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputCode, { useSSNFields } from 'components/InputCode';
import ButtonPrimary from 'widgets/ButtonPrimary';
import { ExclamationIcon } from 'widgets/Svg';
import AuthCard from '../AuthCard';
import './styles.scss';

const initialField = 6;

const AuthenCode = ({ children, className, ...props }) => {
  const history = useHistory();
  const [errorMess, setErrorMess] = useState('');
  const { ssnValues, handleChange } = useSSNFields({ initialField });

  const onSubmit = () => {
    const code = Object.values(ssnValues).filter((o) => o);
    if (code.length < initialField) {
      setErrorMess('Please enter 6 characters Google Authenticator on the Mobile App');
    } else {
      setErrorMess('');
      history.push('/account');
    }
  };

  return (
    <AuthCard className="authen-code" {...props}>
      <h2 className="authen-title">Google Authenticator</h2>
      <p className="authen-des">Enter 6 characters or past copied text</p>
      <div className="authen-input">
        <InputCode initialField={initialField} isError={!!errorMess} ssnValues={ssnValues} handleChange={handleChange} />
      </div>
      <div className="authen-error">{errorMess}</div>
      <div className="authen-action">
        <ButtonPrimary size="larger" onClick={onSubmit}>
          Login
        </ButtonPrimary>
      </div>
      <div className="authen-exclamation">
        <ExclamationIcon />
        <p>The MM Rocket/Google Authenticator app protects your withdrawals and MM Rocket account</p>
      </div>
    </AuthCard>
  );
};

export default AuthenCode;

import React, { useState } from 'react';
import InputCode, { useSSNFields } from 'components/InputCode';
import ButtonPrimary from 'widgets/ButtonPrimary';
import ButtonSecondary from 'widgets/ButtonSecondary';
import './styles.scss';
import AuthCard from '../AuthCard';

const initialField = 5;

const VerifyCode = ({ children, className, ...props }) => {
  const [errorMess, setErrorMess] = useState('');
  const { ssnValues, handleChange } = useSSNFields({ initialField });

  const onSubmit = () => {
    const code = Object.values(ssnValues).filter((o) => o);
    if (code.length < initialField) {
      setErrorMess('Please enter 6 characters Google Authenticator on the Mobile App');
    } else {
      setErrorMess('');
    }
  };

  return (
    <AuthCard className="verify-code" {...props}>
      <h2 className="verify-title">Verification code</h2>
      <div className="verify-input">
        <InputCode initialField={initialField} isError={!!errorMess} ssnValues={ssnValues} handleChange={handleChange} />
      </div>
      <div className="verify-resend">
        <div>Resend in 50s</div>
        <a>Resend</a>
      </div>
      <div className="verify-error">{errorMess}</div>
      <div className="verify-action">
        <ButtonPrimary size="larger" onClick={onSubmit}>
          Done
        </ButtonPrimary>
        <ButtonSecondary size="larger">Back</ButtonSecondary>
      </div>
    </AuthCard>
  );
};

export default VerifyCode;

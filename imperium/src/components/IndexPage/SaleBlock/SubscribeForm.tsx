import React, { useEffect, useState } from 'react';
import { RoundButton } from '../../../shared/RoundButton';
import st from './SaleBlock.module.css';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState('Пожалуйста, введите Email');
  const [formValid, setFormValid] = useState(false);
  const [changes, setChanges] = useState(false);

  const handleBlur = (e: React.FocusEvent) => {
    setEmailDirty(true);
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
    const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!reg.test(String(e.target.value).toLowerCase())) {
      setEmailError('Пожалуйста, введите корректный Email');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setChanges(true);
  };

  useEffect(() => {
    if (emailError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError]);

  return (
    <>
      {changes ? <div className={st.subscribe_thanks}>Спасибо за подписку!</div> : (
        <form className={st.subscribe_form}>
          <input
            onBlur={handleBlur}
            onChange={handleChange}
            value={email}
            name='email' 
            type='text' 
            placeholder='Ваш Email' 
            className={st.subscribe_input}
          >
          </input>
          {emailError && emailDirty && (<div className={st.subscribe_error}>{emailError}</div>)}
          <RoundButton
            isDisabled={!formValid}
            onClick={handleSubmit}
            text={'Подписаться'}
            color={'#333333'}
            background={'#FFFFFF'}
            borderColor={'#FFFFFF'}
          />
        </form>
      )}
    </>
  );
};

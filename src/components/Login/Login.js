import React, { useEffect, useState } from 'react';
import Auth from '../Auth/Auth';

export default function Login({ onLogin }) {
  const [passwordErrors, setPasswordErrors] = useState('Поле не может быть пустым');
  const [emailErrors, setEmailErrors] = useState('Поле не может быть пустым');
  const [isFormValid, setIsFormValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (passwordErrors || emailErrors) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailErrors, passwordErrors]);

  function handlePasswordChange(e) {
    setPassword(e.target.value);

    if (e.target.value.length < 5) {
      setPasswordErrors('Пароль должен быть не меньше 5 символов');
      if (!e.target.value) {
        setPasswordErrors('Поле не может быть пустым');
      }
    } else {
      setPasswordErrors('');
    }
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailErrors('Некорректный email');
    } else {
      setEmailErrors('');
    }
  }

  function handleSubmit() {
    if (isFormValid) {
      onLogin(password, email)
    } else {
      console.log('error');
    }
  }

  return (
    <>
    <Auth
      displayName="display"
      welcomeText="Рады видеть!"
      to="/signup"
      text="Регистрация"
      question="Ещё не зарегистрированы?"
      button="Войти"
      onSubmit={handleSubmit}
      password={password}
      email={email}
      onPasswordChange={handlePasswordChange}
      onEmailChange={handleEmailChange}
      passwordErrors={passwordErrors}
      emailErrors={emailErrors}
      isFormValid={isFormValid}
    />
    </>
  )
};
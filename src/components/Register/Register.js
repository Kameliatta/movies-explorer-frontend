import React, { useState, useEffect } from 'react';
import Auth from '../Auth/Auth';

export default function Register({ onSignup }) {
  const [passwordErrors, setPasswordErrors] = useState('Поле не может быть пустым');
  const [emailErrors, setEmailErrors] = useState('Поле не может быть пустым');
  const [nameErrors, setNameErrors] = useState('Поле не может быть пустым');
  const [isFormValid, setIsFormValid] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    if (passwordErrors || emailErrors || nameErrors) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailErrors, passwordErrors, nameErrors]);

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

  function handleNameChange(e) {
    setName(e.target.value);
    const re = /^[а-яё -]+$/i;

    if (e.target.value.length < 2) {
      setNameErrors('Имя должно быть длинее 2 символов');
      if (!re.test(String(e.target.value).toLowerCase())) {
        setNameErrors('Имя содержит только латиницу, кириллицу, пробел или дефис');
        if (!e.target.value) {
          setNameErrors('Поле не может быть пустым');
        }
      }
    } else {
      setNameErrors('');
    }
  }

  function handleSubmit() {
    if (isFormValid) {
      onSignup(password, email, name);
    } else {
      console.log('error');
    }
    
  }
  return (
    <>
    <Auth
      welcomeText="Добро пожаловать!"
      to="/signin"
      text="Войти"
      question="Уже зарегистрированы?"
      button="Зарегистрироваться"
      onSubmit={handleSubmit}
      onPasswordChange={handlePasswordChange}
      onEmailChange={handleEmailChange}
      onNameChange={handleNameChange}
      isFormValid={isFormValid}
      passwordErrors={passwordErrors}
      emailErrors={emailErrors}
      nameErrors={nameErrors}
      password={password}
      email={email}
      name={name}
    />
    </>
  )
};
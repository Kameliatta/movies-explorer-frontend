import React from 'react';
import Auth from '../Auth/Auth';
import Navigation from '../Navigation/Navigation';

export default function Register() {
  return (
    <>
    <Auth welcomeText="Добро пожаловать!" />
    <Navigation to="/signin" text="Войти" question="Уже зарегистрированы?" button="Зарегистрироваться" />
    </>
  )
};
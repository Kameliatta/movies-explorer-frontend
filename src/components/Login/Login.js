import React from 'react';
import Auth from '../Auth/Auth';
import Navigation from '../Navigation/Navigation';

export default function Login() {
  return (
    <>
    <Auth displayName="display" welcomeText="Рады видеть!" />
    <Navigation to="/signup" text="Регистрация" question="Ещё не зарегистрированы?" button="Войти" />
    </>
  )
};
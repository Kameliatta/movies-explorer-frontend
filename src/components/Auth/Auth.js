import './Auth.css';
import React from 'react';
import Header from '../Header/Header';

export default function Auth(props) {
  const isLogin = true;
  return (
    <>
    <section className="authorization">
      <Header isLogin={isLogin} displayButton="display" authClassName="auth" />
      <h2 className="authorization__welcome">{props.welcomeText}</h2>
      <form className="authorization__container">
        <div className={`authorization__text-box ${props.displayName}`}>
          <span className="authorization__text">
            Имя
          </span>
          <label>
            <input type="text" className="authorization__input"></input>
          </label>
          <span className="authorization__error"></span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            E-mail
          </span>
          <label>
            <input type="email" className="authorization__input"></input>
          </label>
          <span className="authorization__error"></span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            Пароль
          </span>
          <label>
            <input type="password" className="authorization__input error"></input>
          </label>
          <span className="authorization__error">Что-то пошло не так...</span>
        </div>
      </form>
    </section>
    </>
  )
};
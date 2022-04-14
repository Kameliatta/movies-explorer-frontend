import './Auth.css';
import React from 'react';
import Header from '../Header/Header';

export default function Auth(props) {
  return (
    <>
    <section className="authorization">
      <Header isLogin="display" displayButton="display" authClassName="auth" />
      <h2 className="authorization__welcome">{props.welcomeText}</h2>
      <form className="authorization__container">
        <div className={`authorization__text-box ${props.displayName}`}>
          <span className="authorization__text">
            Имя
          </span>
          <label>
            <input
            type="text"
            name="name"
            className="authorization__input input"
            minLength="2"
            maxLength="30"
            placeholder="Виталий"
            required
            >
            </input>
          </label>
          <span className="authorization__error"></span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            E-mail
          </span>
          <label>
            <input
            type="email"
            name="email"
            className="authorization__input input"
            placeholder="pochta@yandex.ru"
            required
            >
            </input>
          </label>
          <span className="authorization__error"></span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            Пароль
          </span>
          <label>
            <input
            type="password"
            name="password"
            className="authorization__input input error"
            minLength="2"
            placeholder="••••••••••••••"
            required
            >
            </input>
          </label>
          <span className="authorization__error">Что-то пошло не так...</span>
        </div>
      </form>
    </section>
    </>
  )
};
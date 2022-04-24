import './Auth.css';
import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Auth(props) {
  function handleSubmit(e) {
    e.preventDefault();

    props.onSubmit();
  }
  return (
    <>
    <section className="authorization">
      <Header isLogin="display" displayButton="display" authClassName="auth" />
      <h2 className="authorization__welcome">{props.welcomeText}</h2>
      <form onSubmit={handleSubmit} className="authorization__container">
        <div className={`authorization__text-box ${props.displayName}`}>
          <span className="authorization__text">
            Имя
          </span>
          <label>
            <input
              type="text"
              name="name"
              className={`authorization__input input ${props.nameErrors ? 'error' : ''}`}
              minLength="2"
              maxLength="30"
              value={props.name}
              onChange={props.onNameChange}
              onBlur={props.onBlur}
            >
            </input>
          </label>
          <span className="authorization__error">{props.name !== '' && props.nameErrors}</span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            E-mail
          </span>
          <label>
            <input
              type="email"
              name="email"
              className={`authorization__input input ${props.emailErrors ? 'error' : ''}`}
              value={props.email}
              onChange={props.onEmailChange}
              onBlur={props.onBlur}
              required
            >
            </input>
          </label>
          <span className="authorization__error">{props.email !== '' && props.emailErrors}</span>
        </div>
        <div className="authorization__text-box">
          <span className="authorization__text">
            Пароль
          </span>
          <label>
            <input
              type="password"
              name="password"
              className={`authorization__input input ${props.passwordErrors ? 'error' : ''}`}
              minLength="5"
              value={props.password}
              onChange={props.onPasswordChange}
              onBlur={props.onBlur}
              required
            >
            </input>
          </label>
          <span className="authorization__error">{props.password !== '' && props.passwordErrors}</span>
        </div>
        <div className="authorization__navigation">
          <button
            disabled={!props.isFormValid}
            type="submit"
            className={`authorization__navigation-button ${props.isFormValid ? '' : 'disabled'}`}
          >{props.button}</button>
        </div>
      </form>
        <div className="navigation">
          <p className="navigation__question">{props.question}
            <Link className="navigation__link selected" to={props.to}>{props.text}</Link>
          </p>
        </div>
    </section>
    </>
  )
};
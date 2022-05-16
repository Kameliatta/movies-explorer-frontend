import './Profile.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

export default function Profile(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonClass, setButtonClass] = useState(false);
  const [buttonStatusClass, setButtonStatusClass] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setName(props.userInfo.name);
    setEmail(props.userInfo.email);
  }, [props.userInfo.name, props.userInfo.email]);

  useEffect(() => {
    if (name !== props.userInfo.name || email !== props.userInfo.email) {
      setButtonClass(true);
      setIsValid(true);
    } else {
      setButtonClass(false);
      setIsValid(false);
    }
  }, [name, email, props.userInfo.name, props.userInfo.email]);

  useEffect(() => {
    if (props.isSuccess === true) {
      setButtonStatusClass('button-success');
      setTimeout(() => {
        setButtonStatusClass('');
      }, 1000);
    } else if (props.isSuccess === false) {
      setButtonStatusClass('button-fail');
      setTimeout(() => {
        setButtonStatusClass('');
      }, 1000);
    }
  }, [props.isSuccess]);

  function handleNameChange(e) {
    setName(e.target.value);
    setButtonStatusClass('');
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setButtonStatusClass('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setButtonStatusClass('');
    if (isValid) {
      props.onUpdateUser({
        email,
        name,
      });
    }
  }
  return (
    <>
    <Header isLogin={props.loggedIn} displayButton="display" />
    <section className="profile">
      <h1 className="profile__welcome">Привет, {props.userInfo.name}!</h1>
      <form onSubmit={handleSubmit} className="profile__container">
        <div className="profile__text-box">
          <span className="profile__text">
            Имя
          </span>
          <input
            name="name"
            type="text"
            className="profile__input input"
            value={name || ''}
            minLength="2"
            maxLength="30"
            onChange={handleNameChange}
            required
          >
          </input>
        </div>
        <div className="profile__text-box">
          <span className="profile__text">
            E-mail
          </span>
          <input
            name="email"
            type="email"
            className="profile__input input"
            value={email || ''}
            onChange={handleEmailChange}
            required
          >
          </input>
        </div>
        <div className="profile-navigation">
          <button
            className={`
              profile-navigation__button
              ${buttonClass ? 'button-underline' : 'button-disabled'}
              ${buttonStatusClass}
            `}
            disabled={false}
          >Редактировать</button>
          <button onClick={props.onLogout} className="profile-navigation__link" >
            <span>Выйти из аккаунта</span>
          </button>
        </div>
      </form>
    </section>
    </>
  )
};
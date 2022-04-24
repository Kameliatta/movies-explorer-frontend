import './Profile.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

export default function Profile(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [buttonClass, setButtonClass] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if ( name !== '' && email !== '') {
      if (name !== props.userInfo.name && email !== props.userInfo.email) {
        setButtonClass(true);
        setIsValid(true);
      }
    }
  }, [name, email, props.userInfo.name, props.userInfo.email]);

  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isValid) {
      props.onUpdateUser({
        email,
        name,
      });
    }
  }
  return (
    <>
    <Header movies={'Фильмы'} savedMovies={'Сохранённые фильмы'} displayButton="display" />
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
            placeholder={props.userInfo.name}
            minLength="2"
            maxLength="30"
            onChange={handleNameChange}
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
            placeholder={props.userInfo.email}
            onChange={handleEmailChange}
          >
          </input>
        </div>
        <div className="profile-navigation">
          <button
            className={`profile-navigation__button button-hover ${buttonClass ? '' : 'button-disabled'}`}
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
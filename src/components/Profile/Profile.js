import './Profile.css';
import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <>
    <Header movies={'Фильмы'} savedMovies={'Сохранённые фильмы'} />
    <section className="profile">
      <h1 className="profile__welcome">Привет, Виталий!</h1>
      <form className="profile__container">
        <div className="profile__text-box">
          <span className="profile__text">
            Имя
          </span>
          <input className="profile__input" placeholder="Виталий"></input>
        </div>
        <div className="profile__text-box">
          <span className="profile__text">
            E-mail
          </span>
          <input className="profile__input" placeholder="pochta@yandex.ru"></input>
        </div>
      </form>
    </section>
    <div className="profile-navigation">
      <button className="profile-navigation__button button-hover">Редактировать</button>
      <Link 
            className="profile-navigation__link selected" 
            to="/signup" 
          >
            <span>Выйти из аккаунта</span>
      </Link>
    </div>
    </>
  )
};
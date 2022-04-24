import './Header.css';
import headerLogo from '../../images/logo.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(true);
  }

  function handleClose() {
    setIsActive(false);
  }

  return (
    <header className={`header ${props.authClassName}`}>
      <Link 
        to="/" 
      >
        <img className="header__logo" src={headerLogo} alt="Логотип сайта"/>
      </Link>
      <div className={`header__menu-container ${props.isLogin}`}>
      {props.isLogin ? (
        <>
        <div className="header__menu-icon" onClick={handleClick}>
          <span></span>
        </div>
        <nav className={`nav ${isActive ? 'open-menu' : ''}`}>
          <button onClick={handleClose} className="nav__close-button nav-display"></button>
          <ul className="nav__container">
            <li className="nav__link nav-display">
              <Link 
                className="link selected"
                to="/" 
              >
                <span className="nav__text underline">Главная</span>
              </Link>
            </li>
            <li className="nav__link">
              <Link 
                className="link selected" 
                to="/movies" 
              >
                <span className="nav__text underline link-hover">{props.movies}</span>
              </Link>
            </li>
            <li className="nav__link">
              <Link 
                className="link saved-movies selected" 
                to="/saved-movies" 
              >
                <span className="nav__text underline link-hover">{props.savedMovies}</span>
              </Link>
            </li>
          </ul>
          <div className="nav-account">
            <Link 
              className="header__link selected" 
              to="/profile" 
            >
              <p className="header__account link-hover">Аккаунт</p>
            </Link>
            <div className="header__account-icon"></div>
          </div>
        </nav>
        </>
      ) : (
      <div className="header__container">
        <Link 
          className="header__link selected" 
          to="/signup" 
        >
          <p className="header__text link-hover">Регистрация</p>
        </Link>
        <Link 
          className="header__link selected"
          to="/signin"
        >
          <button className={`header__button button-hover`}>Войти</button> 
        </Link>
      </div>
      )}
        <div className={`mask-content ${isActive ? '' : 'display'}`}></div>
      </div>
    </header>
  )
}
import './Header.css';
import headerLogo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <header className={`header ${props.authClassName}`}>
      <div className="header__movie-container">
      <img className="header__logo" src={headerLogo} alt="Логотип сайта"/>
      {/* <div className="display"> */}
        <Link 
          className="header__movies selected" 
          to="/movies" 
        >
          <p className="header__text link-hover">{props.movies}</p>
        </Link>
        <Link 
          className="header__movies saved-movies selected"
          to="/saved-movies" 
        >
          <p className="header__text link-hover">{props.savedMovies}</p>
        </Link>
      </div>
      {/* </div> */}
      {/* <div className="display"> */}
        {props.isLogin ?
          <div className="header__container">
            <Link 
              className="header__link selected" 
              to="/signup" 
            >
              <p className="header__text link-hover">{props.signup}</p>
            </Link>
            <Link 
              className="header__link selected"
              to="/signin"
            >
              <button className={`header__button button-hover ${props.displayButton}`}>{props.signin}</button> 
            </Link>
          </div>
          : 
           <div className="header__container">
            <Link 
              className="header__link selected" 
              to="/profile" 
            >
            <p className="header__account link-hover">Аккаунт</p>
            </Link>
          <div className="header__account-icon"></div>
          </div>
        }
      {/* </div> */}
      {/* <div className={`nav-toggle ${props.displayButton}`}></div> */}
      <nav className="nav display">
        <button className="nav__close-button"></button>
        <ul className="nav__container">
          <li className="nav__link">
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
              <span className="nav__text underline">{props.movies}</span>
            </Link>
          </li>
          <li className="nav__link">
            <Link 
              className="link saved-movies selected" 
              to="/saved-movies" 
            >
              <span className="nav__text underline">{props.savedMovies}</span>
            </Link>
          </li>
        </ul>
        <div className="header__container nav-account">
         <Link 
            className="header__link selected" 
            to="/profile" 
          >
            <p className="header__account link-hover">Аккаунт</p>
          </Link>
        <div className="header__account-icon"></div>
       </div>
      </nav>
      <div className="mask-content display"></div>
    </header>
  )
}
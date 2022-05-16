import './NavTab.css';
import React from 'react';

export default function NavTab() {
  return (
    <div className="nav-tab__container">
      <nav>
        <ul className="nav-tab__table">
          <li className="nav-tab__text">
            <a href="#about-project" className="link">
              О проекте
            </a>
          </li>
          <li className="nav-tab__text">
            <a href="#techs" className="link">
              Технологии
            </a>
          </li>
          <li className="nav-tab__text">
            <a href="#student" className="link">
              Студент
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
};
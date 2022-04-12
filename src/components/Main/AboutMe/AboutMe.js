import './AboutMe.css';
import React from 'react';
import studentPhoto from '../../../images/student-photo.jpg';

export default function AboutMe() {
  return (
    <section id="student" className="about-me">
      <div className="container__header">
          <h2 className="container__header_text">
            Студент
          </h2>
      </div>
      <div className="about-me__container">
        <div className="about-me__container-info">
          <h2 className="about-me__name">
            Ксения
          </h2>
          <h3 className="about-me__info">
            Веб-разработчик, 19 лет
          </h3>
          <p className="about-me__description">
            Я родилась в Петропавловске-Камчатском, учусь на первом курсе ("Международный бизнес") в Технологическом университете г.Чэнду, Китай.
            Начала кодить год назад. Владею английским и китайским языками. Помимо JavaScript изучаю Python.
          </p>
          <ul className="container-links about-me-links">
            <li className="container-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://vk.com/kamelia808"
                className="container-link_text link-hover"
              >ВКонтакте</a>
            </li>
            <li className="container-link">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Kameliatta"
                className="container-link_text link-hover"
              >Github</a>
            </li>
          </ul>
        </div>
        <img className="about-me__photo" alt="фотография студента" src={studentPhoto}></img>
      </div>
    </section>
  )
};
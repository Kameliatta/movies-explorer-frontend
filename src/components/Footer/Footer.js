import './Footer.css';
import React from 'react';

export default function Header() {
  return (
    <footer className="footer">
      <div className="footer__paragraph">
        <p className="footer__paragraph-text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      </div>
      <div className="footer__container">
        <span className="footer__container_year">&copy; {(new Date().getFullYear())}</span>
        <ul className="container-links footer-links">
          <li className="container-link footer-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://praktikum.yandex.ru/"
              className="container-link_text link-hover"
            >Яндекс.Практикум</a>
          </li>
          <li className="container-link footer-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Kameliatta"
              className="container-link_text link-hover"
            >Github</a>
          </li>
          <li className="container-link footer-link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://vk.com/kamelia808"
              className="container-link_text link-hover"
            >ВКонтакте</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
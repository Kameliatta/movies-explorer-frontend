import './Portfolio.css';
import React from 'react';

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header_text">
        Портфолио
      </h2>
      <ul className="portfolio__table">
        <li className="portfolio__table_template">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Kameliatta/how-to-learn"
            className="portfolio__table_template-text"
          >
            <div className="portfolio__table_box link-hover">
              Статичный сайт
            </div>
          </a>
        </li>
        <li className="portfolio__table_template">
          <a
            href="https://github.com/Kameliatta/russian-travel"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__table_template-text"
          >
            <div className="portfolio__table_box link-hover">
              Адаптивный сайт
            </div>
          </a>
        </li>
        <li className="portfolio__table_template">
          <a
            href="https://github.com/Kameliatta/react-mesto-api-full"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__table_template-text"
          >
            <div className="portfolio__table_box link-hover">
              Одностраничное приложение
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
};
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
          <a href="#d" className="portfolio__table_template-text">
            <div className="portfolio__table_box link-hover">
              Статичный сайт
            </div>
          </a>
        </li>
        <li className="portfolio__table_template">
          <a href="#d" className="portfolio__table_template-text">
            <div className="portfolio__table_box link-hover">
              Адаптивный сайт
            </div>
          </a>
        </li>
        <li className="portfolio__table_template">
          <a href="#d" className="portfolio__table_template-text">
            <div className="portfolio__table_box link-hover">
              Одностраничное приложение
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
};
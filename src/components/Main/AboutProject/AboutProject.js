import './AboutProject.css';
import React from 'react';

export default function AboutProject() {
  return (
  <section id="about-project" className="about-project__container">
    <div className="container__header">
      <h2 className="container__header_text">
        О проекте
      </h2>
    </div>
    <div className="about-project__main-text">
      <div className="about-project__main-text-container">
        <h3 className="about-project__main-text_header">
          Дипломный проект включал 5 этапов
        </h3>
        <p className="about-project__main-text_paragraph">
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
      </div>
      <div className="about-project__main-text-container">
        <h3 className="about-project__main-text_header">
          На выполнение диплома ушло 5 недель
        </h3>
        <p className="about-project__main-text_paragraph">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
      </div>
    </div>
    <div className="about-project__chart">
      <div className="about-project__chart-zone">
        <div className="green-zone">
          1 неделя
        </div>
        <div className="gray-zone">
          4 недели
        </div>
      </div>
      <div className="about-project__chart-text">
        <div className="about-project__chart-text_back">
          Back-end
        </div>
        <div className="about-project__chart-text_front">
          Front-end
        </div>
      </div>
    </div>
  </section>
  )
};
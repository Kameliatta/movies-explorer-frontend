import './Techs.css';
import React from 'react';

export default function Techs() {
  return (
    <section id="techs" className="techs">
      <div className="container__header">
          <h2 className="container__header_text">
            Технологии
          </h2>
      </div>
      <div className="techs__container">
        <h3 className="techs__container-text">
          7 технологий
        </h3>
        <p className="techs__container-text-paragraph">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
      </div>
      <div>
        <ul className="techs__table">
          <li>
            <div className="techs__table-template button-hover">
              <span>
                HTML
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                CSS
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                JS
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                React
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                Git
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                Express.js
              </span>
            </div>
          </li>
          <li>
            <div className="techs__table-template button-hover">
              <span>
                mongoDB
              </span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
};
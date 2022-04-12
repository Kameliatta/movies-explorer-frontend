import './Navigation.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation(props) {
  return (
    <section className="navigation">
      <button className="navigation__button">{props.button}</button>
      <p className="navigation__question">{props.question}
        <Link className="navigation__link selected" to={props.to}>{props.text}</Link>
      </p>
    </section>
  )
};
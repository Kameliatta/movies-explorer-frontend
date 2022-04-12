import './SearchForm.css';
import React from 'react';
export default function SearchForm() {
  return (
    <section className="search-form">
      <form>
        <div className="search-form__box">
          <input className="search-form__box_input" type="text" placeholder="Фильм" />
          <button className="search-form__box_button" type="submit">Найти</button>
        </div>
      </form>
      <div className="search-form__container">
        <input className="search-form__switch" type="checkbox" />
        <p className="search-form__switch-text">Короткометражки</p>
      </div>
    </section>
  )
};
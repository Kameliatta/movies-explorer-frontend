import './SearchForm.css';
import React, { useEffect, useState } from 'react';
export default function SearchForm({ onSearch, onHandleLoading, onShort }) {
  const [values, setValues] = useState({});
  const [checked, setChecked] = useState(false);
  const searchData = localStorage.getItem('searchData');

  function handleCheckBoxChange() {
    setChecked(!checked)
    localStorage.setItem('shortFilmData', !checked);
  }

  function handleInputChange(e) {
    setValues(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(values);
    onShort(checked);
    onHandleLoading(true);
  }

  useEffect(() => {
    setValues(searchData);
  }, [searchData]);

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <div className="search-form__box">
          <input
            className="search-form__box_input search-form__input"
            type="text"
            placeholder="Фильм"
            required
            onChange={handleInputChange}
            value={values}
          />
          <button className="search-form__box_button" type="submit">Найти</button>
        </div>
      </form>
      <div className="search-form__container">
        <input
          className={`search-form__switch ${checked ? 'switch' : ''}`}
          type="checkbox"
          checked={checked}
          onChange={handleCheckBoxChange}
        />
        <p className="search-form__switch-text">Короткометражки</p>
      </div>
    </section>
  )
};
import './SearchForm.css';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
export default function SearchForm(props) {
  const [values, setValues] = useState('');
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname === '/movies') {
      if (props.searchData !== null) {
        setValues(props.searchData || '');
      } 
      if (props.shortFilmData === 'true') {
        setChecked(true);
      }
    }
  }, []);

  function handleCheckBoxChange() {
    setChecked(!checked);
    if (location.pathname === '/movies') {
      localStorage.setItem('shortFilmData', !checked);
    }
  }

  function handleInputChange(e) {
    setValues(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onSearch(values);
    props.onShort(checked);
    props.onHandleLoading(true);
    if (location.pathname === '/movies') {
      localStorage.setItem('searchData', values);
    }
  }

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
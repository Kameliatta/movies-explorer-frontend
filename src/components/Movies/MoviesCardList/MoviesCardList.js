import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList(props) {
  return (
    <>
    <section className="movies-card-list">
      <ul className="card-list">
        <MoviesCard moviesButton={props.moviesButtonClass} />
      </ul>
    <div className="movies-card-list__container">
      <button className={`movies-card-list__container-button ${props.preloaderButtonClass}`}>Ещё</button>
    </div>
    </section>
    {/* <Preloader /> */}
  </>
  )
};
import './MoviesCard.css';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export default function MoviesCard(props) {
  const [movieLikeButtonClassName, setMovieLikeButtonClassName] = useState('');
  const [movieCardClickClassName, setMovieCardClickClassName] = useState(false);
  const [savedMovie, setSavedMovie] = useState([]);
  const savedMoviesIds = props.savedMoviesData.map((i) => i.movieId);

  useEffect(() => {
    if (savedMoviesIds.indexOf(props.movie.id || props.movie.movieId) >= 0) {
      setMovieLikeButtonClassName('focus');
      setSavedMovie(props.savedMoviesData.filter((m) => m.movieId === props.movie.id));
    } else {
      setMovieLikeButtonClassName('');
    }
  }, [props.savedMoviesData, props.filteredMovie, props.movie.id, props.movie.movieId, savedMoviesIds]);

  function openCard() {
    setMovieCardClickClassName(!movieCardClickClassName);
  }

  function handleSave(e) {
    e.preventDefault();
    
    if (savedMoviesIds.indexOf(props.movie.id || props.movie.movieId) >= 0) {
      props.onDeleteMovie(savedMovie[0] || props.movie)
      setMovieLikeButtonClassName('');
    } else {
      props.onSaveMovie(props.movie);
      setMovieLikeButtonClassName('focus');
    }
  }

  return (
    <>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <span className="card-list__movie-name" title={props.movie.nameRU}>{props.movie.nameRU}</span>
        <span className="card-list__movie-duration">{props.movie.duration}</span>
      </div>
      <div onClick={openCard} className="card-list__movie-image_box">
        <img
          className="card-list__movie-image"
          src={props.movie.image.url === undefined ? props.movie.image : props.url + props.movie.image.url}
          alt={props.movie.nameRU}
        ></img>
        <CSSTransition classNames="open-transition" in={movieCardClickClassName} timeout={300}>
          <div onClick={openCard} className={`card-list__card-open ${movieCardClickClassName ? 'open-card' : ''}`}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="card-list__movie-link link-hover"
              href={props.movie.trailerLink}
            >Трейлер</a>
            <p className="card-list__card-open_text">{`Страна: ${props.movie.country}`}</p>
            <p className="card-list__card-open_text">{`Режиссёр: ${props.movie.director}`}</p>
            <p className="card-list__card-open_text">{`Год: ${props.movie.year}`}</p>
            <p className="card-list__card-open_text card-open_description">{props.movie.description}</p>
          </div>
        </CSSTransition>
      </div>
      <button
        onClick={handleSave}
        className={`card-list__movie-button ${props.moviesButton} ${movieLikeButtonClassName}`}
      >Сохранить</button>
    </li>
    </>
  )
};
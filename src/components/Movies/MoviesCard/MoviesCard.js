import './MoviesCard.css';
import React, { useEffect, useState } from 'react';

export default function MoviesCard(props) {
  const [movieLikeButtonClassName, setMovieLikeButtonClassName] = useState('');
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
        <h3 className="card-list__movie-name">{props.movie.nameRU}</h3>
        <span className="card-list__movie-duration">{props.movie.duration}</span>
      </div>
      <img
        className="card-list__movie-image"
        src={props.movie.image.url === undefined ? props.movie.image : props.url + props.movie.image.url}
        alt={props.movie.nameRU}
      ></img>
      <button
        onClick={handleSave}
        className={`card-list__movie-button ${props.moviesButton} ${movieLikeButtonClassName}`}
      >Сохранить</button>
    </li>
    </>
  )
};
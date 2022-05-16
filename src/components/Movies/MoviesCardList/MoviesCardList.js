import './MoviesCardList.css';
import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

export default function MoviesCardList(props) {
  const movies = JSON.parse(localStorage.getItem('filmData'));
  return (
    <>
    <section className="movies-card-list">
     {props.searchFilter || props.savedMovies ?
        (movies.length !== 0 ?
          (props.isLoading ? (
              <Preloader />
            ) : (props.movies.length !== 0 ?
                  (<ul className="card-list">
                  {props.movies.map((movies, i) => {
                    return <MoviesCard
                      moviesButton={props.moviesButtonClass}
                      key={i}
                      movie={movies}
                      onSaveMovie={props.onSaveMovie}
                      onDeleteMovie={props.onDeleteMovie}
                      savedMoviesData={props.savedMoviesData}
                      filteredMovie={props.movies}
                      url={props.url}
                      isSaved={props.isSaved}
                    />
                  })}
                  </ul>
                  ) : 
                  <p>Ничего не найдено</p>
              )
        ) : (
          <p>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        )) : 
        (<></>)
      }
    <div className="movies-card-list__container">
      {props.searchFilter ? (
        <button
          onClick={props.handleClick}
          className={
            `movies-card-list__container-button
            ${props.filteredMovie.length === props.movies.length || props.nextButton ? "display" : ""}`
          }
        >Ещё</button>
      ) : (
        <></>
      )
      }
    </div>
    </section>
  </>
  )
};
import React, { useState, useEffect, useLayoutEffect } from 'react';
import MoviesCardList from '../components/Movies/MoviesCardList/MoviesCardList';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function SavedMovies(props) {
  const [movies, setMovies] = useState([]);
  const [filteredMovie, setFilteredMovie] = useState([]);
  const [width, height] = useWindowSize();
  const [count, setCount] = useState();
  const [next, setNext] = useState(0);
  const [number, setNumber] = useState();
  const [postsToShow, setPostsToShow] = useState([]);
  const [liked, setLiked] = useState(false);

  const filmData = JSON.parse(localStorage.getItem('filmData'));

  useEffect(() => {
    if (props.savedMovies) {
      setMovies(props.savedMovies);
      setLiked(true);
    } else {
      setMovies(filmData);
    }
  }, [props.savedMovies, filmData]);

  // фильтрация фильмов

  function isShort(value) {
    if (value.duration <= 40) {
        return value
    }
  }

  useEffect(() => {
    if (props.shortFilter) {
      setFilteredMovie(movies.filter((n) => 
        n.nameRU.toLowerCase()
          .includes(props.searchFilter.toLowerCase()))
          .filter(isShort)
      );
    } else {
      setFilteredMovie(movies.filter((n) => n.nameRU.toLowerCase().includes(props.searchFilter.toLowerCase())));
    }

  }, [props.shortFilter, props.searchFilter, movies]);



  // ограничение отображения фильмов

  let arrayForHoldingPosts = [];

  function updateDimensions() {
    if ((width >= 1024 && width <= 1280) || width >= 1280) {
      setCount(12);
      setNumber(3);
    } else if (width >= 480 && width < 1024) {
      setCount(8);
      setNumber(2);
    } else if (width >= 320 && width <= 480) {
      setCount(5);
      setNumber(2);
    }
  }

  function loopWithSlice(start, end) {
    const slicedPosts = filteredMovie.slice(start, end);
    arrayForHoldingPosts = [...arrayForHoldingPosts, ...slicedPosts];
    setPostsToShow(arrayForHoldingPosts);
  };

  function handleClick() {
    loopWithSlice(0, count + next);
    setNext(number + next);
  }

  useEffect(() => {
    loopWithSlice(0, count);
    updateDimensions();
    setNext(number);
  }, [width, height, filteredMovie.length, count]);

  return (
    <MoviesCardList
      savedMovies={props.savedMovies}
      savedMoviesData={props.savedMoviesData}
      isSaved={props.isSaved}
      onSaveMovie={props.onSaveMovie}
      onDeleteMovie={props.onDeleteMovie}
      movies={liked ? filteredMovie : postsToShow}
      filteredMovie={filteredMovie}
      searchFilter={props.searchFilter}
      shortFilter={props.shortFilter}
      isLoading={props.isLoading}
      onHandleLoading={props.onHandleLoading}
      moviesButtonClass={props.moviesButtonClass}
      handleClick={handleClick}
      nextButton={props.nextButton}
      url={props.url}
    />
  )
};
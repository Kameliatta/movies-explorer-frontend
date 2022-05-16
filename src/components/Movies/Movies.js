import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterMovies from '../../utils/FilterMovies';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

export default function Movies(props) {
  const url = 'https://api.nomoreparties.co/';
  const searchData = localStorage.getItem('searchData');
  const shortFilmData = localStorage.getItem('shortFilmData');
  return (
    <>
    <Header
      isLogin={props.loggedIn}
      displayButton="display"
    />
    <SearchForm
      searchData={searchData}
      shortFilmData={shortFilmData}
      onSearch={props.onSearch}
      onShort={props.onShort}
      onHandleLoading={props.handleLoading}
    />
    <FilterMovies
      searchData={searchData}
      shortFilmData={shortFilmData}
      onSaveMovie={props.onSaveMovie}
      onDeleteMovie={props.onDeleteMovie}
      moviesButtonClass={props.moviesButtonClass}
      searchFilter={props.onSearchFilter}
      shortFilter={props.onShortFilter}
      isLoading={props.isLoading}
      onHandleLoading={props.handleLoading}
      savedMoviesData={props.savedMoviesData}
      url={url}
      isSaved={props.isSaved}
    />
    <Footer />
    <InfoTooltip infoTooltip={props.infoTooltip} />
    </>
  )
};
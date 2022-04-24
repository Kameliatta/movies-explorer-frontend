import React from 'react';
import account_icon from '../../images/account.svg';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterMovies from '../../utils/FilterMovies';
import Footer from '../Footer/Footer';

export default function Movies(props) {
  const url = 'https://api.nomoreparties.co/';
  return (
    <>
    <Header
      movies={'Фильмы'}
      savedMovies={'Сохранённые фильмы'}
      account={'Аккаунт'}
      img={account_icon}
      displayButton="display"
    />
    <SearchForm
      onSearch={props.onSearch}
      onShort={props.onShort}
      onHandleLoading={props.handleLoading}
    />
    <FilterMovies
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
    </>
  )
};
import React from 'react';
import account_icon from '../../images/account.svg';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterMovies from '../../utils/FilterMovies';
import Footer from '../Footer/Footer';

export default function SavedMovies(props) {
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
        savedMovies={props.savedMovies}
        savedMoviesData={props.savedMovies}
        searchFilter={props.onSearchFilter}
        shortFilter={props.onShortFilter}
        onDeleteMovie={props.onDeleteMovie}
        isLoading={props.isLoading}
        onHandleLoading={props.handleLoading}
        moviesButtonClass={`selected_button`}
        nextButton={true}
      />
      <Footer />
      </>
  )
};
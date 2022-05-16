import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterMovies from '../../utils/FilterMovies';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

export default function SavedMovies(props) {
  return (
    <>
      <Header
        isLogin={props.loggedIn}
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
      <InfoTooltip infoTooltip={props.infoTooltip} />
      </>
  )
};
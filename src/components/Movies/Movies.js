import './Movies.css';
import React from 'react';
import account_icon from '../../images/account.svg';
import Header from '../Header/Header';
import SearchForm from '../Movies/SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

export default function Movies(props) {
  return (
    <>
    <Header movies={'Фильмы'} savedMovies={'Сохранённые фильмы'} account={'Аккаунт'} img={account_icon} />
    <SearchForm />
    <MoviesCardList moviesButtonClass={props.moviesButtonClass} preloaderButtonClass={props.preloaderButtonClass} />
    <Footer />
    </>
  )
};
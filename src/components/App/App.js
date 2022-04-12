import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={
        <Main />
      }></Route>
      <Route path='/movies' element={
        <Movies />
      }/>
      <Route path='/saved-movies' element={
        <SavedMovies />
      }/>
      <Route path='/profile' element={
        <Profile />
      }/>
      <Route path='/signin' element={
        <Login />
      }/>
      <Route path='/signup' element={
        <Register />
      }/>
      <Route path='*' element={
        <NotFound />
      }/>
    </Routes>
  );
}

export default App;

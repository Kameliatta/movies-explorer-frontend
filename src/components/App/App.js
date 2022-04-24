import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Movies from '../Movies/Movies.js';
import SavedMovies from '../SavedMovies/SavedMovies.js';
import Profile from '../Profile/Profile.js';
import Register from '../Register/Register.js';
import Login from '../Login/Login.js';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';
import MoviesApi from '../../utils/MoviesApi';
import MainApi from '../../utils/MainApi';
const url = 'https://api.nomoreparties.co/';

function App() {
  const [searchFilter, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleTokenChange();
  }, []);

  function handleTokenChange() {
    if (localStorage.getItem('jwt')) {
      MainApi.checkToken()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              navigate('/movies');
            }
          })
          .catch((err) => {
            console.log(err);
            setLoggedIn(false);
          })
    }
  }

  //регистрация пользователя
  function handleSignup(password, email, name) {
    MainApi.register(password, email, name)
        .then((res) => {
          if (res.statusCode !== 400) {
            navigate('/signin');
          }
        })
        .catch((err) => {
          console.log(err);
        });
  }

  //авторизация пользователя
  function handleLogin(password, email) {
    MainApi.authorize(password, email)
      .then((res) => {
        if (res?._id) {
          localStorage.setItem('jwt', res?._id);
          setLoggedIn(true);
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout(evt) {
    evt.preventDefault();
    MainApi.logout()
      .then()

      .catch((err) => {
        console.log(err);
      })
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    navigate('/signin');
  }

  function handleLoading(param) {
    setLoading(param);
  }

    //получение данных
    useEffect(() => {
      if (loggedIn) {
        Promise.all([
          MainApi.getUserInfo(),
          MoviesApi.getMovies(),
          MainApi.getMoviesInfo()
        ])

        .then(([user, movies, savedMovies]) => {   
          localStorage.setItem('filmData', JSON.stringify(movies));
          setCurrentUser(user);
          setSavedMovies(savedMovies);
        })

        .catch((err)=>{
          console.log(err);
        })
        }
    }, [loggedIn]);

    useEffect(() => {
      localStorage.setItem('searchData', searchFilter);
      localStorage.setItem('shortFilmData', isShort);
      handleLoading(false);
    }, [searchFilter, loading, isShort])

    // сохранение карточки фильма
    function handleSaveMovie(movie) {
      MainApi.createMovie({
        country: movie.country || null,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: url + movie.image.url,
        trailerLink: movie.trailerLink || null,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || null,
        thumbnail: movie.thumbnail || url + movie.image.url,
        movieId: movie.id,
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
        setIsSaved(true);
      })
      .catch((err)=>{
        console.log(err);
      })
    }

    function handleDeleteMovie(movie) {
      MainApi.deleteMovie(movie._id)
        .then(() => {
          setSavedMovies(savedMovies.filter((m) => 
            movie.movieId === undefined ? m.movieId !== movie.id : m.movieId !== movie.movieId
          ));
          setIsSaved(false);
        })
        .catch((err) => {
          console.log(err);
        })
    }

  // обновление информации о пользователе
  function handleUpdateUser(userInfo) {
    MainApi.setUserInfo({
      email: userInfo.email,
      name: userInfo.name
      })
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

    function handleSearch(data) {
      setSearch(data);
    }

    function handleShort(data) {
      setIsShort(data);
    }

  return (
    <Routes>
      <Route exact path='/' element={
        <Main loggedIn={loggedIn} />
      }></Route>
      <Route path='/movies' element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Movies
            onSearchFilter={searchFilter}
            onShortFilter={isShort}
            onSearch={handleSearch}
            onShort={handleShort}
            handleLoading={handleLoading}
            isLoading={loading}
            onSaveMovie={handleSaveMovie}
            onDeleteMovie={handleDeleteMovie}
            savedMoviesData={savedMovies}
            isSaved={isSaved}
          />
        </ProtectedRoute>
      }/>
      <Route path='/saved-movies' element={
        <ProtectedRoute loggedIn={loggedIn}>
          <SavedMovies
            onSearchFilter={searchFilter}
            onDeleteMovie={handleDeleteMovie}
            onShortFilter={isShort}
            onSearch={handleSearch}
            onShort={handleShort}
            handleLoading={handleLoading}
            isLoading={loading}
            savedMovies={savedMovies}
          />
        </ProtectedRoute>
      }/>
      <Route path='/profile' element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Profile
            userInfo={currentUser}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
          />
        </ProtectedRoute>
      }/>
      <Route path='/signin' element={
        <Login onLogin={handleLogin} />
      }/>
      <Route path='/signup' element={
        <Register onSignup={handleSignup} />
      }/>
      <Route path='*' element={
        <NotFound />
      }/>
    </Routes>
  );
}

export default App;

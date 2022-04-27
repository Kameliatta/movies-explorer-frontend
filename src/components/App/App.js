import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
  const [searchSavedMoviesFilter, setSavedMoviesSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const [infoTooltip, setInfoTooltip] = useState({
    class: '',
    message: ''
  });
  const navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    handleTokenChange();
  }, []);

  function handleTokenChange() {
    if (localStorage.getItem('jwt')) {
      MainApi.checkToken()
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              navigate(location.pathname);
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
            handleLogin(password, email);
            setInfoTooltip({
              class: 'active',
              message: 'Регистрация прошла успешно'
            })
            setTimeout(() => {
              setInfoTooltip('');
            }, 1000);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err === 'Ошибка: 409') {
            setInfoTooltip({
              class: 'active',
              message: 'Пользователь с таким email уже существует'
            })
          } else {
            setInfoTooltip({
              class: 'active',
              message: 'Что-то пошло не так...'
            })
          }
          setTimeout(() => {
            setInfoTooltip('');
          }, 2000);
        });
  }

  //авторизация пользователя
  function handleLogin(password, email) {
    MainApi.authorize(password, email)
      .then((res) => {
        if (res?._id) {
          localStorage.setItem('jwt', res?._id);
          setLoggedIn(true);
          navigate('/movies');
          setInfoTooltip({
            class: 'active',
            message: 'Вход выполнен'
          })
          setTimeout(() => {
            setInfoTooltip('');
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        setInfoTooltip({
          class: 'active',
          message: 'Что-то пошло не так...'
        })
        setTimeout(() => {
          setInfoTooltip('');
        }, 2000);
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
    localStorage.removeItem('shortFilmData');
    localStorage.removeItem('searchData');
    setLoggedIn(false);
    navigate('/');
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
      handleLoading(false);
    }, [loading])

    // сохранение карточки фильма
    function handleSaveMovie(movie) {
      MainApi.createMovie({
        country: movie.country || 'null',
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: url + movie.image.url,
        trailerLink: movie.trailerLink || 'null',
        nameRU: movie.nameRU,
        nameEN: movie.nameEN || 'null',
        thumbnail: movie.thumbnail || url + movie.image.url,
        movieId: movie.id,
      })
      .then((savedMovie) => {
        setSavedMovies([savedMovie, ...savedMovies]);
        setIsSaved(true);
        setInfoTooltip({
          class: 'active',
          message: 'Фильм сохранён'
        })
        setTimeout(() => {
          setInfoTooltip('');
        }, 2000);
      })
      .catch((err)=>{
        console.log(err);
        setInfoTooltip({
          class: 'active',
          message: 'Что-то пошло не так...'
        })
        setTimeout(() => {
          setInfoTooltip('');
        }, 2000);
      })
    }

    function handleDeleteMovie(movie) {
      MainApi.deleteMovie(movie._id)
        .then(() => {
          setSavedMovies(savedMovies.filter((m) => 
            movie.movieId === undefined ? m.movieId !== movie.id : m.movieId !== movie.movieId
          ));
          setIsSaved(false);
          setTimeout(() => {
            setInfoTooltip('');
          }, 1500);
          setInfoTooltip({
            class: 'active',
            message: 'Фильм удалён'
          })
        })
        .catch((err) => {
          console.log(err);
          setTimeout(() => {
            setInfoTooltip('');
          }, 2000);
          setInfoTooltip({
            class: 'active',
            message: 'Что-то пошло не так...'
          })
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
        setTimeout(() => {
          setIsSuccess(true);
        }, 100);
        setIsSuccess(false);
      })
      .catch((err) => {
        console.log(err);
        setTimeout(() => {
          setIsSuccess(false);
        }, 100);
      })
  }

    function handleSearch(data) {
      setSearch(data);
    }

    function handleSavedMoviesSearch(data) {
      setSavedMoviesSearch(data);
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
            loggedIn={loggedIn}
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
            infoTooltip={infoTooltip}
          />
        </ProtectedRoute>
      }/>
      <Route path='/saved-movies' element={
        <ProtectedRoute loggedIn={loggedIn}>
          <SavedMovies
            loggedIn={loggedIn}
            onSearchFilter={searchSavedMoviesFilter}
            onDeleteMovie={handleDeleteMovie}
            onShortFilter={isShort}
            onSearch={handleSavedMoviesSearch}
            onShort={handleShort}
            handleLoading={handleLoading}
            isLoading={loading}
            savedMovies={savedMovies}
            infoTooltip={infoTooltip}
          />
        </ProtectedRoute>
      }/>
      <Route path='/profile' element={
        <ProtectedRoute loggedIn={loggedIn}>
          <Profile
            loggedIn={loggedIn}
            userInfo={currentUser}
            onLogout={handleLogout}
            onUpdateUser={handleUpdateUser}
            isSuccess={isSuccess}
          />
        </ProtectedRoute>
      }/>
      <Route path='/signin' element={
        <Login onLogin={handleLogin} infoTooltip={infoTooltip} />
      }/>
      <Route path='/signup' element={
        <Register onSignup={handleSignup} infoTooltip={infoTooltip} />
      }/>
      <Route path='*' element={
        <NotFound />
      }/>
    </Routes>
  );
}

export default App;

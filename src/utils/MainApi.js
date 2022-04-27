class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register(password, email, name) {
    return fetch(this._url + `signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email, name })
    })
    .then(this._getResponseData)
  }

  authorize(password, email) {
    return fetch(this._url + `signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password, email })
    })
    .then(this._getResponseData)
  }

  checkToken() {
    return fetch(this._url + `users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(this._getResponseData)
  }

  getUserInfo() {
    return fetch(this._url + `users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  getMoviesInfo() {
    return fetch(this._url + `movies`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  setUserInfo(data) {
    return fetch(this._url + `users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  createMovie(data) {
    return fetch(this._url + `movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify(data)
    })
      .then(this._getResponseData)
  }

  deleteMovie(movieId) {
    return fetch(this._url + `movies/` + `${movieId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
      .then(this._getResponseData)
  }

  logout() {
    return fetch(this._url + `signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers
    })
    .then(this._getResponseData)
  }
}


const MainApi = new Api({
  // url: 'https://api.movies-explo.nomoredomains.work/',
  url: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default MainApi;
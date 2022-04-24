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

  getMovies() {
    return fetch(this._url + `beatfilm-movies`, {
      method: 'GET',
      headers: this._headers
    })
      .then(this._getResponseData)
  }
}


const MoviesApi = new Api({
  url: 'https://api.nomoreparties.co/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default MoviesApi;
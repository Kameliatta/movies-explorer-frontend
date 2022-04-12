import './MoviesCard.css';
import React from 'react';
import image_one from '../../../images/def_pic.jpg';
import image_two from '../../../images/pic2.jpg';
import image_three from '../../../images/pic3.jpg';
import image_four from '../../../images/pic4.jpg';
import image_five from '../../../images/pic5.jpg';
import image_six from '../../../images/pic6.jpg';
import image_seven from '../../../images/pic7.jpg';
import image_eight from '../../../images/pic8.jpg';
import image_nine from '../../../images/pic9.jpg';
import image_ten from '../../../images/pic10.jpg';
import image_eleven from '../../../images/pic11.jpg';
import image_twelve from '../../../images/pic12.jpg';

export default function MoviesCard(props) {
  return (
    <>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_one} alt="Постер фильма"></img>
      <button className={`card-list__movie-button focus ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_two} alt="Постер фильма"></img>
      <button className={`card-list__movie-button focus ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_three} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_four} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_five} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_six} alt="Постер фильма"></img>
      <button className={`card-list__movie-button focus ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_seven} alt="Постер фильма"></img>
      <button className={`card-list__movie-button focus ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_eight} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_nine} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_ten} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_eleven} alt="Постер фильма"></img>
      <button className={`card-list__movie-button focus ${props.moviesButton}`}>Сохранить</button>
    </li>
    <li className="card-list__movie button-hover">
      <div className="card-list__movie-text-box">
        <h3 className="card-list__movie-name">В погоне за Бенкси</h3>
        <span className="card-list__movie-duration">27 минут</span>
      </div>
      <img className="card-list__movie-image" src={image_twelve} alt="Постер фильма"></img>
      <button className={`card-list__movie-button ${props.moviesButton}`}>Сохранить</button>
    </li>
    </>
  )
};
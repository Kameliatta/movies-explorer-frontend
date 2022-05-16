import './Main.css';
import React from 'react';
import Header from '../Header/Header';
import Promo from './Promo/Promo.js';
import NavTab from './NavTab/NavTab.js';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import AboutProject from './AboutProject/AboutProject';

export default function Main(props) {
  return (
    <section>
      <div className="main">
        <Header isLogin={props.loggedIn} />
        <Promo />
      </div>
      <NavTab />
      <div className="main-section">
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
      </div>
    </section>
  )
};
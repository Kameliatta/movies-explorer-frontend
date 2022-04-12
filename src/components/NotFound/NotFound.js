import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found">
     <span className="not-found__number">404</span>
     <p className="not-found__text">Страница не найдена</p>
     <Link 
            className="not-found__back selected" 
            to="/" 
          >
            <span className="not-found__back-text">Назад</span>
      </Link>
    </section>
  )
};
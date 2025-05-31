import React, { useState, useEffect } from 'react';
import './slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('right');

  ////////////////////////////////// Fonction pour changer de slide /////////////////////////////////////////
  const changeSlide = (newIndex, dir) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
    setDirection(dir);
  };
  /////////////////////////////////// Aller à l’image suivante ////////////////////////////////////////////////////
  const goToNext = () => {
    const nextIndex = (currentIndex + 1) % pictures.length;
    changeSlide(nextIndex, 'right');
  };

  /////////////////////////////////// Aller à l’image precedente  ////////////////////////////////////////////////
  const goToPrev = () => {
    const prev = (currentIndex - 1 + pictures.length) % pictures.length;
    changeSlide(prev, 'left');
  };

  ////////////////////////Effet pour cacher l’ancienne image après animation //////////////////////////////////////

  useEffect(() => {
    const timer = setTimeout(() => setPrevIndex(null), 800);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  //////////////////////////////////// Rendu jsx /////////////////////////////////////////////////////////////////

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {prevIndex !== null && (
          <img
            key={`prev-${prevIndex}`}
            src={pictures[prevIndex]}
            alt=""
            className={`slideshow-image ${
              direction === 'right' ? 'slide-out-left' : 'slide-out-right'
            }`}
          />
        )}
        <img
          key={`current-${currentIndex}`}
          src={pictures[currentIndex]}
          alt=""
          className={`slideshow-image ${
            direction === 'right' ? 'slide-in-right' : 'slide-in-left'
          }`}
        />
      </div>

      {pictures.length > 1 && (
        <>
          <button className="slideshow-button left" onClick={goToPrev}>
            ‹
          </button>
          <button className="slideshow-button right" onClick={goToNext}>
            ›
          </button>
          <div className="slideshow-counter">
            {' '}
            {currentIndex + 1} / {pictures.length}{' '}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;

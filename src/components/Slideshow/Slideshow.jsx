import React, { useState } from 'react';
import '../Slideshow/slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="slideshow">
      <div className={`slideshow-container ${direction}`}>
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slideshow-image"
          key={currentIndex} // Important pour l'animation
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
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;
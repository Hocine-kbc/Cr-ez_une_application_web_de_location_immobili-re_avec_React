import React, { useState, useEffect } from 'react';
import '../Slideshow/slideshow.scss';

const Slideshow = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [direction, setDirection] = useState('right');

  const goToNext = () => {
    setPrevIndex(currentIndex);
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % pictures.length);
  };

  const goToPrev = () => {
    setPrevIndex(currentIndex);
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => setPrevIndex(null), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="slideshow">
      <div className="slideshow-container">
        {prevIndex !== null && (
          <img
            key={`slide-prev-${prevIndex}-${direction}`}
            src={pictures[prevIndex]}
            alt={`Slide ${prevIndex + 1}`}
            className={`slideshow-image ${
              direction === 'right' ? 'slide-out-left' : 'slide-out-right'
            }`}
          />
        )}
        <img
          key={`slide-current-${currentIndex}-${direction}`}
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={`slideshow-image ${
            direction === 'right' ? 'slide-in-right' : 'slide-in-left'
          }`}
        />
      </div>

      {pictures.length > 1 && (
        <>
          <button className="slideshow-button left" onClick={goToPrev}>‹</button>
          <button className="slideshow-button right" onClick={goToNext}>›</button>
          <div className="slideshow-counter">
            {currentIndex + 1} / {pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slideshow;

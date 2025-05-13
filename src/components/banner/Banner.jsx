import React from 'react';
import './banner.scss';

const Banner = ({ title, image }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      <div className="banner__overlay"></div>
      <h1 className="banner__title">{title}</h1>
    </div>
  );
};
export default Banner;
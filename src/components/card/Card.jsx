import React from 'react';
import { Link } from 'react-router-dom';
import './card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/Property/${id}`} className="card-link">
      <article className="card">
        <img src={cover} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
      </article>
    </Link>
  );
};

export default Card;

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logements from '../../../public/data/data.json';
// Composants
import Slideshow from '../../components/Slideshow/Slideshow';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/collapse/Collapse';
import Tag from '../../components/Tag/Tag';
import './property.scss';// Style

const Property = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  // Redirige vers la page d’erreur si l’ID est invalide
  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="property-page">
      {/* Galerie d'images */}
      <Slideshow pictures={logement.pictures} />

      {/* Titre et localisation */}
      <section className="property-header">
        <div className="left-column">
          <h1 className="property-title">{logement.title}</h1>
          <p className="property-location">{logement.location}</p>

          {/* Tags */}
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        {/* Informations sur l’hôte et note */}
        <div className="right-column">
          <div className="host-info">
            <p className="host-name">{logement.host.name.split(' ').join('\n')}</p>
            <img 
              src={logement.host.picture} 
              alt={`Propriétaire: ${logement.host.name}`}
              className="host-picture"
            />
          </div>

          <div className="rating-container">
            <Rating rating={parseInt(logement.rating)} />
          </div>
        </div>
      </section>

      {/* Description et équipements */}
      <section className="collapse-section">
        <Collapse title="Description">
          <p className="description-text">{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul className="equipments-list">
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </section>
    </main>
  );
};

export default Property;
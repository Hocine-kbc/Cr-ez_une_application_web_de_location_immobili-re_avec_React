import { useParams, Navigate } from 'react-router-dom';
import logements from '../../../public/data/data.json';
import Slideshow from '../components/Slideshow';

import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import Tag from '../components/Tag';
import '../assets/styles/logement.scss';

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement-page">
     

      <Slideshow pictures={logement.pictures} />
      
      <section className="logement-header">
        <div className="left-column">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
          <div className="tags-container">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

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

export default Logement;
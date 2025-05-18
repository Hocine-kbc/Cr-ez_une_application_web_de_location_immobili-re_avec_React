import React from 'react';
import logements from '../../../public/data/data.json';
import Banner from '../../components/banner/Banner';
import Card from '../../components/card/Card';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <main>
        <Banner
          title="Chez vous, partout et ailleurs"
          image="/images/banner-image.jpg"
        />
        <div className="gallery">
          {logements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

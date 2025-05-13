import React from 'react';
import logements from '../../public/data/data.json';

import Banner from '../components/banner/Banner';
import Card from '../components/card/Card';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import './home.scss'; // ✅ Import du fichier SCSS du même dossier

const Home = () => {
  return (
    <div className="home">
      <Header />
      
      <main>
      <Banner 
  title="Chez vous, partout et ailleurs" 
  image="/images/banner-image.jpg" // ✅ Bon chemin
/>
        <div className="gallery">
          {logements.map(logement => (
            <Card 
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
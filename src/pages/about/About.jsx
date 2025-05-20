import React from 'react';
import Collapse from '../../components/collapse/Collapse';
import '../about/about.scss';
import Banner from '../../components/banner/Banner';

const About = () => {
  return (
    <main className="about-page">
      {/* Bannière avec image */}
      <Banner
        image="/images/about-image.png"
        title="" // Laissez vide si vous ne voulez pas de titre
      />

      {/* Sections collapsibles */}
      <section className="about-collapses">
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services.
          </p>
        </Collapse>
      </section>
    </main>
  );
};

export default About;

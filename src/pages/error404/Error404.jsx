import { Link } from 'react-router-dom';
import '../error404/error404.scss';

const Error = () => {
  return (
    <div className="error-page">
      <h1 className="error-title">404</h1>
      <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="retour">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};

export default Error;

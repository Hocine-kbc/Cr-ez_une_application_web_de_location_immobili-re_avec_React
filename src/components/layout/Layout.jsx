import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Ici s'affichent Home, Property, etc. */}
      <Footer />
    </>
  );
};

export default Layout;

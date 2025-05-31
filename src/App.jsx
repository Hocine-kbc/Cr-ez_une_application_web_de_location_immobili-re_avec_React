import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Property from './pages/Property/Property';
import Error404 from './pages/error404/Error404';
import Layout from './components/layout/Layout';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/a-propos" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

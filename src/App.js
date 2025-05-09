import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CountryDetails from './pages/CountryDetails';
import CountryRegion from './pages/CountryRegion';
import RegionCountries from './pages/RegionCountries';
import { CountryProvider } from './contexts/CountryContext';

const App = () => {
  return (
    <CountryProvider>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:countryName" element={<CountryDetails />} />
            <Route path="/country-region" element={<CountryRegion />} />
            <Route path="/region/:regionName" element={<RegionCountries />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-3">
          <div className="container">
            <p className="mb-0">© 2025 Country Explorer. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </CountryProvider>
  );
};

export default App;
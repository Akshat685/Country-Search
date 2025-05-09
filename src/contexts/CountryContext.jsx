import React, { createContext, useState, useEffect, useContext } from 'react';
import { fetchAllCountries } from '../services/api';

const CountryContext = createContext();

export const useCountries = () => {
  return useContext(CountryContext);
};

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [independenceFilter, setIndependenceFilter] = useState('all');

  useEffect(() => {
    const getCountries = async () => {
      try {
        setLoading(true);
        const data = await fetchAllCountries();
        setCountries(data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch countries. Please try again later.');
        console.error('Error fetching countries:', err);
      } finally {
        setLoading(false);
      }

      
    };

    getCountries();
  }, []);

  const getFilteredCountries = () => {
    return countries.filter(country => {
      // Apply search filter
      const matchesSearch = searchTerm === '' || 
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (country.cca2 && country.cca2.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (country.cca3 && country.cca3.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (country.region && country.region.toLowerCase().includes(searchTerm.toLowerCase()));

      // Apply independence filter
      let matchesIndependence = true;
      if (independenceFilter === 'independent') {
        matchesIndependence = country.independent === true;
      } else if (independenceFilter === 'dependent') {
        matchesIndependence = country.independent === false;
      }

      return matchesSearch && matchesIndependence;
    });
  };

  const getCountryByName = (name) => {
    return countries.find(country => 
      country.name.common.toLowerCase() === name.toLowerCase() ||
      (country.name.official && country.name.official.toLowerCase() === name.toLowerCase())
    );
  };

  const getCountryByCode = (code) => {
    return countries.find(country => 
      country.cca3 === code || country.cca2 === code
    );
  };

  const getCountriesByRegion = (region) => {
    return countries.filter(country => 
      country.region && country.region.toLowerCase() === region.toLowerCase()
    );
  };

  const getAllRegions = () => {
    const regions = countries
      .map(country => country.region)
      .filter(region => region); // Filter out undefined/null

    return [...new Set(regions)]; // Remove duplicates
  };
  
  const value = {
    countries,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    independenceFilter,
    setIndependenceFilter,
    getFilteredCountries,
    getCountryByName,
    getCountryByCode,
    getCountriesByRegion,
    getAllRegions
  };

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  );
};
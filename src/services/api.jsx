const API_BASE_URL = 'https://restcountries.com/v3.1';

export const fetchAllCountries = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/all`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};

export const fetchCountryByName = async (name) => {
  try {
    const response = await fetch(`${API_BASE_URL}/name/${name}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0]; // Return the first match
  } catch (error) {
    console.error(`Error fetching country by name (${name}):`, error);
    throw error;
  }
};

export const fetchCountryByCode = async (code) => {
  try {
    const response = await fetch(`${API_BASE_URL}/alpha/${code}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data[0]; // Return the first match
  } catch (error) {
    console.error(`Error fetching country by code (${code}):`, error);
    throw error;
  }
};

export const fetchCountriesByRegion = async (region) => {
  try {
    const response = await fetch(`${API_BASE_URL}/region/${region}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching countries by region (${region}):`, error);
    throw error;
  }
};
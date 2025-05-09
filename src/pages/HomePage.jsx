import React from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import CountryCard from '../components/CountryCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { useCountries } from '../contexts/CountryContext';

function HomePage() {
  const { 
    loading, 
    error, 
    getFilteredCountries,
    searchTerm,
    independenceFilter
  } = useCountries();
  
  // Get countries based on filters
  var filteredCountries = getFilteredCountries();
  console.log("Got " + filteredCountries.length + " countries after filtering");
  
  // Show loading spinner if data is still loading
  if (loading) {
    console.log("Still loading countries...");
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }
  
  // Show error message if something went wrong
  if (error) {
    console.log("Error loading countries: " + error);
    return (
      <Container>
        <Alert variant="danger">
          {error}
        </Alert>
      </Container>
    );
  }
  
  // Function to get the page title
  function getPageTitle() {
    if (searchTerm || independenceFilter !== 'all') {
      return 'Filtered Countries';
    } else {
      return 'All Countries';
    }
  }
  
  return (
    <Container>
      <h1 className="mb-4">
        {getPageTitle()}
      </h1>
      
      {filteredCountries.length === 0 ? (
        // No countries found
        <Alert variant="info">
          No countries found matching your criteria.
        </Alert>
      ) : (
        // Countries found, show them in a grid
        <>
          {/* Show how many countries we found */}
          <p className="text-muted mb-4">
            Showing {filteredCountries.length} {filteredCountries.length === 1 ? 'country' : 'countries'}
          </p>
          
          {/* Grid of country cards */}
          <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
            {filteredCountries.map(function(country) {
              return (
                <Col key={country.cca3}>
                  <CountryCard country={country} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
}

export default HomePage;
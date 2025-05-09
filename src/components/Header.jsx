import React from 'react';
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Nav,
  Dropdown,
} from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { House, Globe2, Map } from 'lucide-react';
import { useCountries } from '../contexts/CountryContext';
import '../styles/Header.css';

function Header() {
  let location = useLocation();
  let navigate = useNavigate();
  
  const {
    searchTerm,
    setSearchTerm,
    independenceFilter,
    setIndependenceFilter,
  } = useCountries();
  
  // check if we're on the region page
  var isRegionPage = location.pathname === '/country-region';
  
  // function for search box changes
  function handleSearchChange(e) {
    console.log("Searching for: " + e.target.value);
    setSearchTerm(e.target.value);
  };
  
  // function for dropdown filter
  function handleIndependenceFilterChange(value) {
    console.log("Filter changed to: " + value);
    setIndependenceFilter(value);
  };
  
  // function for home button
  function handleHomeClick(e) {
    e.preventDefault();
    console.log("Going home!");
    setSearchTerm('');
    navigate('/');
  };
  
  return (
    <Navbar bg="white" expand="lg" className="mb-4 shadow-sm header-navbar">
      <Container>
        {/* Brand logo and text */}
        <Navbar.Brand
          as={Link}
          to="/"
          onClick={handleHomeClick}
          className="header-brand"
        >
          <Globe2 size={28} className="icon-primary" />
          <span className="fw-bold">Country Explorer</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          {/* Navigation links */}
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={handleHomeClick}
              className="header-link"
            >
              <House size={18} className="me-2" />
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/country-region"
              className="header-link"
            >
              <Map size={18} className="me-2" />
              Regions
            </Nav.Link>
          </Nav>
          
          {/* Only show search and filter on non-region pages */}
          {!isRegionPage && (
            <div className="header-controls">
              <Form className="header-search">
                <FormControl
                  type="search"
                  placeholder="Search countries..."
                  className="search-input"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </Form>
              
              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="outline-primary"
                  id="independence-dropdown"
                  className="filter-toggle"
                >
                  {independenceFilter === 'all'
                    ? 'All Countries'
                    : independenceFilter === 'independent'
                    ? 'Independent'
                    : 'Dependent'}
                </Dropdown.Toggle>
                
                <Dropdown.Menu>
                  <Dropdown.Item
                    active={independenceFilter === 'all'}
                    onClick={() => handleIndependenceFilterChange('all')}
                  >
                    All Countries
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={independenceFilter === 'independent'}
                    onClick={() => handleIndependenceFilterChange('independent')}
                  >
                    Independent
                  </Dropdown.Item>
                  <Dropdown.Item
                    active={independenceFilter === 'dependent'}
                    onClick={() => handleIndependenceFilterChange('dependent')}
                  >
                    Dependent
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
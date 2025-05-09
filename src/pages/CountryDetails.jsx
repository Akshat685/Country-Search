import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Alert,
} from "react-bootstrap";
import { ArrowLeft, Globe } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";
import { useCountries } from "../contexts/CountryContext";
import "../styles/CountryDetails.css"; 

const CountryDetails = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const { getCountryByName, getCountryByCode, loading } = useCountries();

  const [country, setCountry] = useState(null);
  const [borderCountries, setBorderCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = () => {
      try {
        const decodedName = decodeURIComponent(countryName);
        const foundCountry = getCountryByName(decodedName);

        if (!foundCountry) {
          setError(`Country '${decodedName}' not found`);
          return;
        }

        setCountry(foundCountry);

        if (foundCountry.borders && foundCountry.borders.length > 0) {
          const borderData = foundCountry.borders.map((border) => {
            const borderCountry = getCountryByCode(border);
            return borderCountry || { cca3: border, name: { common: border } };
          });

          setBorderCountries(borderData);
        } else {
          setBorderCountries([]);
        }

        setError(null);
      } catch (err) {
        setError("Failed to fetch country details");
        console.error(err);
      }
    };

    fetchCountryData();
  }, [countryName, getCountryByName, getCountryByCode]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleBorderCountryClick = (borderCountry) => {
    navigate(`/country/${encodeURIComponent(borderCountry.name.common)}`);
  };

  const handleRegionClick = () => {
    if (country && country.region) {
      navigate(`/region/${encodeURIComponent(country.region)}`);
    }
  };

  if (loading) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Button
          variant="outline-primary"
          className="mb-4"
          onClick={handleBackClick}
        >
          <ArrowLeft size={18} className="me-2" /> Back
        </Button>
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!country) {
    return (
      <Container>
        <LoadingSpinner />
      </Container>
    );
  }

  return (
    <Container className="country-detail-container">
      <Button
        variant="outline-primary"
        className="mb-4"
        onClick={handleBackClick}
      >
        <ArrowLeft size={18} className="me-2" /> Back
      </Button>

      <Row className="mb-5">
        <Col md={5} className="mb-4 mb-md-0">
          <img
            src={country.flags.svg || country.flags.png}
            alt={`Flag of ${country.name.common}`}
            className="flag-image"
          />
        </Col>

        <Col md={7}>
          <h1 className="mb-3">{country.name.common}</h1>
          <p className="text-muted">{country.name.official}</p>

          <div className="mb-4">
            <Badge bg="secondary" className="me-2">
              {country.cca3}
            </Badge>
            <Badge
              bg="info"
              className="me-2 cursor-pointer"
              onClick={handleRegionClick}
            >
              <Globe size={14} className="me-1" /> {country.region}
            </Badge>
            <Badge bg={country.independent ? "success" : "warning"}>
              {country.independent ? "Independent" : "Dependent"}
            </Badge>
          </div>

          <Card className="mb-4">
            <Card.Body>
              <Row>
                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Capital</div>
                  <div>
                    {country.capital ? country.capital.join(", ") : "N/A"}
                  </div>
                </Col>

                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Population</div>
                  <div>{country.population?.toLocaleString() || "N/A"}</div>
                </Col>

                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Subregion</div>
                  <div>{country.subregion || "N/A"}</div>
                </Col>

                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Area</div>
                  <div>
                    {country.area
                      ? `${country.area.toLocaleString()} km²`
                      : "N/A"}
                  </div>
                </Col>

                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Currency</div>
                  <div>
                    {country.currencies
                      ? Object.values(country.currencies)
                          .map((curr) => curr.name)
                          .join(", ")
                      : "N/A"}
                  </div>
                </Col>

                <Col xs={6} md={4} className="mb-3">
                  <div className="text-muted mb-1">Languages</div>
                  <div>
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : "N/A"}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          {borderCountries.length > 0 && (
            <div>
              <h5 className="mb-3">Border Countries</h5>
              <div className="border-countries">
                {borderCountries.map((border) => (
                  <div
                    key={border.cca3}
                    className="border-badge"
                    onClick={() => handleBorderCountryClick(border)}
                  >
                    <img
                      src={border.flags?.png}
                      alt={`Flag of ${border.name.common}`}
                    />
                    <span className="text-dark">{border.name.common}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CountryDetails;

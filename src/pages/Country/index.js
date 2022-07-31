import { useState, useEffect } from "react";

import CountryServices from "../../services/CountryServices";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {
  Container,
  ButtonBack,
  CountryWrapper,
  CountryDataContainer,
  CountryDataList,
  BorderCountryContainer,
} from "./styles";

import { Link, useParams } from "react-router-dom";
import Loader from "../../components/Loader";

export default function Country() {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { countryCode } = useParams();

  useEffect(() => {
    async function LoadCountry() {
      try {
        setIsLoading(true);

        const countriesList = await CountryServices.getCountryByCode(
          countryCode
        );
        setCountry(countriesList);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    }

    LoadCountry();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <ButtonBack>
        <FontAwesomeIcon icon={faArrowLeft} />
        Back
      </ButtonBack>
      {country.map((country) => (
        <CountryWrapper key={country.ccn3}>
          <aside>
            <img src={country.flags.svg} alt="Nome do pais" />
          </aside>

          <CountryDataContainer>
            <h2>{country.name.common}</h2>

            <CountryDataList>
              <ul>
                <li>
                  <b>Native Name: </b>
                  {Object.values(country.name.nativeName)[0].common}
                </li>
                <li>
                  <b>Population: </b>
                  {country.population}
                </li>
                <li>
                  <b>Region: </b>
                  {country.region}
                </li>
                <li>
                  <b>Sub Region: </b>
                  {country.subregion}
                </li>
                <li>
                  <b>Capital: </b>
                  {country.capital}
                </li>
              </ul>

              <ul>
                <li>
                  <b>Top Level Domain: </b> {country.tld}
                </li>
                <li>
                  <b>Currencies: </b>
                  {Object.values(country.currencies)[0].name}
                </li>
                <li>
                  <b>Languages: </b> {Object.values(country.languages)[0]}
                </li>
              </ul>
            </CountryDataList>
            {country.borders && (
              <BorderCountryContainer>
                <p>
                  <b>Border Countries:</b>
                </p>
                <ul>
                  {country.borders.map((countryBorder) => (
                    <li>
                      <Link to={`/country/${countryBorder}`}>
                        {countryBorder}
                      </Link>
                    </li>
                  ))}
                </ul>
              </BorderCountryContainer>
            )}
          </CountryDataContainer>
        </CountryWrapper>
      ))}
    </Container>
  );
}

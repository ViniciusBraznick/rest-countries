import React, { useState, useEffect, useMemo } from "react";
import {
  Container,
  FilterContainer,
  InputSearch,
  SelectSearch,
  CardContainer,
} from "./styles";

import countryService from "../../services/CountryServices.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import Card from "../../components/Card";
import Loader from "../../components/Loader";
import EmptyMessage from "../../components/EmptyMessage";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [selectRegion, setSelectRegion] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredContacts = useMemo(() => {
    return countries.filter((country) =>
      country.name.common
        .toLocaleLowerCase()
        .includes(searchCountry.toLocaleLowerCase())
    );
  }, [countries, searchCountry]);

  function handleChangeSearchCountry(event) {
    setSearchCountry(event.target.value);
  }

  function handleChangeSelectSearch(event) {
    setSelectRegion(event.target.value);
  }

  useEffect(() => {
    async function loadCountries() {
      try {
        setIsLoading(true);

        const countriesList = await countryService.index();
        setCountries(countriesList);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadCountries();
  }, []);

  useEffect(() => {
    async function loadRegion() {
      try {
        setIsLoading(true);
        const countriesList =
          selectRegion === ""
            ? await countryService.index()
            : await countryService.getCountryByRegion(selectRegion);

        setCountries(countriesList);
      } catch (error) {
        console.log("error", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadRegion();
  }, [selectRegion]);

  return (
    <Container>
      <Loader isLoading={isLoading} />
      <FilterContainer>
        <InputSearch>
          <label htmlFor="search" aria-label="Search country">
            <FontAwesomeIcon icon={faSearch} />
          </label>
          <input
            id="search"
            type="text"
            value={searchCountry}
            onChange={handleChangeSearchCountry}
            placeholder="Search for a country..."
          />
        </InputSearch>

        <SelectSearch>
          <select onChange={handleChangeSelectSearch} value={selectRegion}>
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </SelectSearch>
      </FilterContainer>

      <CardContainer>
        {filteredContacts.map((country, index) => (
          <Card key={index} cardData={country} />
        ))}
      </CardContainer>

      {filteredContacts.length === 0 && !isLoading && <EmptyMessage />}
    </Container>
  );
}

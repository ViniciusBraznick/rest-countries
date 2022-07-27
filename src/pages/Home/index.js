import React, { useState, useEffect } from "react";
import {
  Container,
  FilterContainer,
  InputSearch,
  SelectSearch,
  CardContainer,
} from "./styles";

import countryService from "../../services/CountryServices.js";

import searchIcon from "../../assets/images/search-icon.svg";
import Card from "../../components/Card";

export default function Home() {
  const [searchCountry, setSearchCountry] = useState("");
  const [selectCountry, setSelectCountry] = useState("");

  const [countries, setCountries] = useState([]);

  function handleChangeSearchCountry(event) {
    setSearchCountry(event.target.value);
  }

  function handleChangeSelectSearch(event) {
    setSelectCountry(event.target.value);
  }

  useEffect(() => {
    async function loadCountries() {
      // Adiciona Loading

      try {
        const countriesList = await countryService.index();
        setCountries(countriesList);
      } catch (error) {
        console.log("error", error);
      } finally {
        // Remove loading
      }
    }

    loadCountries();
  }, []);

  return (
    <Container>
      <FilterContainer>
        <InputSearch>
          <label htmlFor="search" aria-label="Search">
            <img src={searchIcon} alt="Search" />
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
          <select onChange={handleChangeSelectSearch} value={selectCountry}>
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
        {countries.map((country) => (
          <Card cardData={country} />
        ))}
      </CardContainer>
    </Container>
  );
}

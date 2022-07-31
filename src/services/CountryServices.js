import HttpClient from "./utils/HttpClient";

import { mockCountry } from "./mocks/countryMock";
import { detailsCountryMock } from "./mocks/detailsCountryMock";

class countryService {
  constructor() {
    this.httpClient = new HttpClient("https://restcountries.com/v3.1/");
  }

  async index() {
    // const countries = await this.httpClient.get("all");
    // return countries;

		return mockCountry;
  }

  async getCountryByCode(code) {
    // const country = await this.httpClient.get(`alpha?codes=${code}`);
    // return country;

		return detailsCountryMock
  }
}

export default new countryService();

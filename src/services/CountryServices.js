import HttpClient from "./utils/HttpClient";

class countryService {
  constructor() {
    this.httpClient = new HttpClient("https://restcountries.com/v3.1/");
  }

  async index() {
    const countries = await this.httpClient.get("all");
    return countries;
  }

  async getCountryByRegion(region) {
    const countries = await this.httpClient.get(`region/${region}`);
    return countries;
  }

  async getCountryByCode(code) {
    const country = await this.httpClient.get(`alpha?codes=${code}`);
    return country;
  }
}

export default new countryService();

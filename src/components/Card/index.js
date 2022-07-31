import { Container, CardData, CountryName, DataList } from "./styles";

import formatNumber from "../../utils/formatNumber";
import { Link } from "react-router-dom";

function Card({ cardData }) {
  return (
    <Container>
      <Link
        to={`country/${cardData.cca2}`}
        title={`See more about ${cardData.name.common}`}
      >
        <header>
          <img src={cardData.flags.png} alt={`${cardData.name.common} flag`} />
        </header>

        <CardData>
          <CountryName>{cardData.name.common}</CountryName>

          <DataList>
            <li>
              <p>
                <b>Population:</b> {formatNumber(cardData.population)}
              </p>
            </li>
            <li>
              <p>
                <b>Region:</b> {cardData.region}
              </p>
            </li>
            <li>
              <p>
                <b>Capital:</b> {cardData.capital}
              </p>
            </li>
          </DataList>
        </CardData>
      </Link>
    </Container>
  );
}

export default Card;

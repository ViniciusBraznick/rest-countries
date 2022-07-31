import { Container, HeaderContent, ToggleTheme } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header({ currentTheme, onToggleTheme }) {
  return (
    <Container>
      <HeaderContent>
        <a href="/">
          <h1>Where in the world?</h1>
        </a>

        <ToggleTheme
          onClick={onToggleTheme}
          title={`Toggle theme to ${currentTheme}`}
        >
          <FontAwesomeIcon icon={currentTheme === "light" ? faSun : faMoon} />
          <p>{currentTheme} Mode</p>
        </ToggleTheme>
      </HeaderContent>
    </Container>
  );
}

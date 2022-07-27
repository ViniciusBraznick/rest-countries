import { Container, HeaderContent, ToggleTheme } from "./styles";

import moonIcon from "../../assets/images/moon-icon.svg";
import sunIcon from "../../assets/images/sun-icon.svg";

export default function Header({ currentTheme, onToggleTheme }) {
  return (
    <Container>
      <HeaderContent>
        <h1>Where in the world?</h1>

        <ToggleTheme
          onClick={onToggleTheme}
          title={`Toggle theme to ${currentTheme}`}
        >
          <img
            src={currentTheme === "light" ? sunIcon : moonIcon}
            alt="Change theme icon"
          />
          <p>{currentTheme} Mode</p>
        </ToggleTheme>
      </HeaderContent>
    </Container>
  );
}

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "../../assets/global";
import Header from "../Header";
import { ThemeProvider } from "styled-components";

import light from "../../assets/themes/light";
import dark from "../../assets/themes/dark";
import AppRoutes from "../../Routes";

function App() {
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "light"
  );

  function handleToggleTheme() {
    let a = theme === "dark" ? "light" : "dark";
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
    localStorage.setItem("theme", JSON.stringify(a));
  }

  return (
    <ThemeProvider theme={theme === "dark" ? light : dark}>
      <GlobalStyle />
      <Header currentTheme={theme} onToggleTheme={handleToggleTheme} />

      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

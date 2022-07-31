import React from "react";
import ButtonBack from "../../components/ButtonBack";
import { Container } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <h2>404</h2>
      <strong>Page Not Found</strong>
			<ButtonBack />
    </Container>
  );
}

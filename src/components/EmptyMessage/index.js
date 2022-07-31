import React from "react";
import { Container, EmptyTextContainer } from "./styles";

import emptyMessageIcon from "../../assets/images/empty-message.svg";

export default function EmptyMessage() {
  return (
    <Container>
      <img src={emptyMessageIcon} />

      <EmptyTextContainer>
        <h2>We couldn't find any country with this name.</h2>
        <small>Are you sure this is on earth?</small>
      </EmptyTextContainer>
    </Container>
  );
}

import React from "react";
import { Button } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ButtonBack() {
  return (
    <Button>
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </Button>
  );
}

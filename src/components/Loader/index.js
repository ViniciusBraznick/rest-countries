import ReactDOM from "react-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { Overlay } from "./styles";

export default function Loader({ isLoading }) {
  if (!isLoading) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <FontAwesomeIcon icon={faSpinner} />
    </Overlay>,
    document.getElementById("loader-root")
  );
}

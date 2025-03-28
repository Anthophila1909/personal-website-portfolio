import React from "react";
import { Carousel } from "react-bootstrap";
import Dictionary_App from "../imgs/Dictionary_App.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function DictionaryApp() {
  return (
    <div className="DictionaryApp">
      <img src={Dictionary_App} alt="Fourth slide" />
      <Carousel.Caption>
        <div className="projekt-titel">
          <a
            href="https://the-dictionary-application.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className=" btn projekt-btn"
          >
            Dictionary Application <FontAwesomeIcon icon={faHandPointer} />
          </a>
        </div>
        <p>
          Ein Wörterbuch, das die Definition eines Wortes anzeigt. Es wurde mit{" "}
          <strong>React.js</strong> erstellt und verwendet die Dictionary API
          von SheCodes.
        </p>
      </Carousel.Caption>
    </div>
  );
}

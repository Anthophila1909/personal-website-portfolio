import React from "react";
import { Carousel } from "react-bootstrap";
import AI_Fantasy_Figure_Generator from "../imgs/AI_Fantasy_Figure_Generator.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function AIFantasyFigureGenerator() {
  return (
    <div className="AIFantasyFigureGenerator">
      <img src={AI_Fantasy_Figure_Generator} alt="First slide" />
      <Carousel.Caption>
        <div className="projekt-titel">
          <a
            href="https://ai-fantasy-figure-generator.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className=" btn projekt-btn"
          >
            AI Fantasy Figure Generator <FontAwesomeIcon icon={faHandPointer} />
          </a>
        </div>
        <p>
          Eine KI-App, die eine zufällige Fantasy-Figur generiert. Sie wurde mit{" "}
          <strong>JS</strong> erstellt und verwendet die AI-API von SheCodes.
        </p>
      </Carousel.Caption>
    </div>
  );
}

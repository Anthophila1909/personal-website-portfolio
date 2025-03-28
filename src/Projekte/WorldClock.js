import React from "react";
import { Carousel } from "react-bootstrap";
import World_Clock from "../imgs/World_Clock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function WorldClock() {
  return (
    <div className="WorldClock">
      <img src={World_Clock} alt="Third slide" />
      <Carousel.Caption>
        <div className="projekt-titel">
          <a
            href="https://world-clock-by-elena.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className=" btn projekt-btn"
          >
            World Clock <FontAwesomeIcon icon={faHandPointer} />
          </a>
        </div>
        <p>
          Eine Weltuhr, die die aktuelle Uhrzeit in verschiedenen Städten
          anzeigt. Sie wurde mit <strong>JS</strong> erstellt und verwendet die
          World Time API von SheCodes.
        </p>
      </Carousel.Caption>
    </div>
  );
}

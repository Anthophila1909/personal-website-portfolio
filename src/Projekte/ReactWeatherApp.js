import React from "react";
import { Carousel } from "react-bootstrap";
import React_Weather_App from "../imgs/React_Weather_App.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function ReactWeatherApp() {
  return (
    <div className="ReactWeatherApp">
      <img src={React_Weather_App} alt="Second slide" />
      <Carousel.Caption>
        <div className="projekt-titel">
          <a
            href="https://elenas-react-weather-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className=" btn projekt-btn"
          >
            Weather App <FontAwesomeIcon icon={faHandPointer} />
          </a>
        </div>
        <p>
          Eine Wetter App die das aktuelle Wetter und die Vorhersage für die
          nächsten 5 Tage anzeigt. Sie wurde mit <strong>React.js</strong>{" "}
          erstellt und verwendet die OpenWeather API von SheCodes.
        </p>
      </Carousel.Caption>
    </div>
  );
}

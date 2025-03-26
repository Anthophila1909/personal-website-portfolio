import Carousel from "react-bootstrap/Carousel";
import AI_Fantasy_Figure_Generator from "./imgs/AI_Fantasy_Figure_Generator.png";
import Dictionary_App from "./imgs/Dictionary_App.png";
import Embroidery_Project from "./imgs/Embroidery_Project.png";
import Python_AI_Travel_Planner from "./imgs/Python_AI_Travel_Planner.png";
import React_Weather_App from "./imgs/React_Weather_App.png";
import World_Clock from "./imgs/World_Clock.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

import "./css/ProjectCarousel.css";

export default function ProjectCarousel() {
  return (
    <div className="ProjectCarousel">
      <Carousel>
        <Carousel.Item interval={7000}>
          <img src={AI_Fantasy_Figure_Generator} alt="First slide" />
          <Carousel.Caption>
            <div className="projekt-titel">
              <a
                href="https://ai-fantasy-figure-generator.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className=" btn projekt-btn"
              >
                AI Fantasy Figure Generator{" "}
                <FontAwesomeIcon icon={faHandPointer} />
              </a>
            </div>
            <p>
              Eine KI-App, die eine zufällige Fantasy-Figur generiert. Sie wurde
              mit <strong>JS</strong> erstellt und verwendet die AI-API von
              SheCodes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
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
        </Carousel.Item>
        <Carousel.Item interval={7000}>
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
              anzeigt. Sie wurde mit <strong>JS</strong> erstellt und verwendet
              die World Time API von SheCodes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
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
              Ein Wörterbuch, das die Definition eines Wortes anzeigt. Es wurde
              mit <strong>React.js</strong> erstellt und verwendet die
              Dictionary API von SheCodes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={Embroidery_Project} alt="Fifth slide" />
          <Carousel.Caption>
            <div className="projekt-titel">
              <a
                href="https://elenas-embroidery-project.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className=" btn projekt-btn"
              >
                Embroidery Project <FontAwesomeIcon icon={faHandPointer} />
              </a>
            </div>
            <p>
              Eine Website über ein Hobby-Projekt. Sie wurde mit{" "}
              <strong>JS</strong> erstellt und hat ein{" "}
              <strong>responsives Design</strong>.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={Python_AI_Travel_Planner} alt="Sixth slide" />
          <Carousel.Caption>
            <div className="projekt-titel">
              <a
                href="https://colab.research.google.com/drive/1urP2VOVLvP4JfFNrWz3yMbqMOREOEscj?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className=" btn projekt-btn"
              >
                AI Travel Planner <FontAwesomeIcon icon={faHandPointer} />
              </a>
            </div>
            <p>
              Ein KI-Reiseplaner, der die beste Reiseroute für eine Reise
              zwischen verschiedenen Städten berechnet. Er wurde mit{" "}
              <strong>Python</strong>, der AI-API und der OpenWeather API von
              SheCodes erstellt.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

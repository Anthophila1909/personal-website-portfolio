import React from "react";
import { Carousel } from "react-bootstrap";
import Python_AI_Travel_Planner from "../imgs/Python_AI_Travel_Planner.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function PythonAITravelPlanner() {
  return (
    <div className="PythonAITravelPlanner">
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
          Ein KI-Reiseplaner, der die beste Reiseroute für eine Reise zwischen
          verschiedenen Städten berechnet. Er wurde mit <strong>Python</strong>,
          der AI-API und der OpenWeather API von SheCodes erstellt.
        </p>
      </Carousel.Caption>
    </div>
  );
}

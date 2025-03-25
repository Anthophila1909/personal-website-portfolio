import Carousel from "react-bootstrap/Carousel";
import AI_Fantasy_Figure_Generator from "./imgs/AI_Fantasy_Figure_Generator.png";
import Dictionary_App from "./imgs/Dictionary_App.png";
import Embroidery_Project from "./imgs/Embroidery_Project.png";
import Python_AI_Travel_Planner from "./imgs/Python_AI_Travel_Planner.png";
import React_Weather_App from "./imgs/React_Weather_App.png";
import World_Clock from "./imgs/World_Clock.png";
import "./css/ProjectCarousel.css";

export default function ProjectCarousel() {
  return (
    <div className="ProjectCarousel">
      <Carousel>
        <Carousel.Item interval={7000}>
          <img
            src={AI_Fantasy_Figure_Generator}
            className="w-50"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              <a
                href="https://ai-fantasy-figure-generator.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                AI Fantasy Figure Generator
              </a>
            </h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={React_Weather_App} className="w-50" alt="Second slide" />
          <Carousel.Caption>
            <h3>
              {" "}
              <a
                href="https://elenas-react-weather-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Weather App
              </a>
            </h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={World_Clock} className="w-50" alt="Third slide" />
          <Carousel.Caption>
            <h3>
              {" "}
              <a
                href="https://world-clock-by-elena.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                World Clock
              </a>
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={Dictionary_App} className="w-50" alt="Fourth slide" />
          <Carousel.Caption>
            <h3>
              {" "}
              <a
                href="https://the-dictionary-application.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Dictionary Application
              </a>
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img src={Embroidery_Project} className="w-50" alt="Fifth slide" />
          <Carousel.Caption>
            <h3>
              {" "}
              <a
                href="https://elenas-embroidery-project.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Embroidery Project
              </a>
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={7000}>
          <img
            src={Python_AI_Travel_Planner}
            className="w-50"
            alt="Sixth slide"
          />
          <Carousel.Caption>
            <h3>
              {" "}
              <a
                href="https://colab.research.google.com/drive/1urP2VOVLvP4JfFNrWz3yMbqMOREOEscj?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                AI Travel Planner
              </a>
            </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

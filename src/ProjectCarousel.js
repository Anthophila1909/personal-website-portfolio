import Carousel from "react-bootstrap/Carousel";
import AIFantasyFigureGenerator from "./Projekte/AIFantasyFigureGenerator";
import ReactWeatherApp from "./Projekte/ReactWeatherApp";
import WorldClock from "./Projekte/WorldClock";
import DictionaryApp from "./Projekte/DictionaryApp";
import EmbroideryProject from "./Projekte/EmbroideryProject";
import PythonAITravelPlanner from "./Projekte/PythonAITravelPlanner";
import "./css/ProjectCarousel.css";

export default function ProjectCarousel() {
  return (
    <div className="ProjectCarousel">
      <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item interval={7000}>
            <AIFantasyFigureGenerator />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <ReactWeatherApp />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <WorldClock />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <DictionaryApp />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <EmbroideryProject />
          </Carousel.Item>
          <Carousel.Item interval={7000}>
            <PythonAITravelPlanner />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

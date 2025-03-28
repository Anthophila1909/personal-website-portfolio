import React from "react";
import { Carousel } from "react-bootstrap";
import Embroidery_Project from "../imgs/Embroidery_Project.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default function EmbroideryProject() {
  return (
    <div className="EmbroideryProject">
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
          Eine Website über ein Hobby-Projekt. Sie wurde mit <strong>JS</strong>{" "}
          erstellt und hat ein <strong>responsives Design</strong>.
        </p>
      </Carousel.Caption>
    </div>
  );
}

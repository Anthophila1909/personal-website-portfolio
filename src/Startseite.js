import React from "react";
import img from "./imgs/elena-startseite.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import "./css/Startseite.css";

export default function Startseite() {
  return (
    <div className="Startseite container">
      <div className="row introduction">
        <div className="col introduction-text">
          <h1>
            Hi, ich bin Elena! <FontAwesomeIcon icon={faFaceSmileBeam} />
          </h1>
          <h1 className="berufsbezeichnung">- Junior Frontend Developerin -</h1>
          <p className="intro-text-anfang">
            Mein Weg in die Tech-Welt begann mit der Neugier, digitale Produkte
            nicht nur zu nutzen, sondern selbst zu gestalten. <br /> Inzwischen
            schreibe ich mit Begeisterung Code, besonders in{" "}
            <strong>React</strong>.
          </p>
          <h2 className="inhaltsverzeichnis">Was dich hier erwartet</h2>
          <ul>
            <li>
              Ein Einblick in <strong>meinen Werdegang</strong> und meine
              Motivation
            </li>
            <li>
              Mein <strong>Lebenslauf</strong> zum Download
            </li>
            <li>
              Eine Auswahl meiner <strong>Projekte</strong>
            </li>
            <li>
              Eine Möglichkeit, <strong>Kontakt</strong> mit mir aufzunehmen
            </li>
          </ul>
        </div>
        <div className="col">
          <img
            src={img}
            alt="Elena Würtz - Junior Front End Developer"
            className="img-startseite"
          />
          <div className="col buttons">
            <a href="/ueber-mich" className="btn ueber-mich">
              Über mich
            </a>
            <a href="/projekte" className="btn projekte">
              Meine Projekte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

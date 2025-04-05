import React from "react";
import img from "./imgs/elena-startseite.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import "./css/Startseite.css";

export default function Startseite() {
  return (
    <div className="Startseite">
      <div className="header">
        <div className="row">
          <div className="col-sm header-text">
            <h1>
              Hi, ich bin Elena! <FontAwesomeIcon icon={faFaceSmileBeam} />
            </h1>
            <h1 className="berufsbezeichnung">Junior Frontend Developerin</h1>
          </div>
          <div className="col-sm">
            <img
              src="/imgs/undraw_portfolio-update_6bro.svg"
              alt="Illustration of developer"
              className="img-header"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm text-start">
            <p>
              Mein Weg in die Tech-Welt begann mit der Neugier, digitale
              Produkte nicht nur zu nutzen, sondern selbst zu gestalten. <br />{" "}
              Inzwischen schreibe ich mit Begeisterung Code, besonders in{" "}
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
            <div className="buttons">
              <Link
                to="/UeberMich"
                className="btn ueber-mich"
                onClick={() => window.scrollTo(0, 0)}
              >
                Über mich
              </Link>
              <Link
                to="/Projekte"
                className="btn projekte"
                onClick={() => window.scrollTo(0, 0)}
              >
                Meine Projekte
              </Link>
            </div>
          </div>
          <div className="col-sm">
            <img
              src={img}
              alt="Elena Würtz - Junior Front End Developer"
              className="img-startseite"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

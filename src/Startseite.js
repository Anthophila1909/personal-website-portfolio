import React from "react";
import img from "./imgs/elena-startseite.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmileBeam } from "@fortawesome/free-solid-svg-icons";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import "./css/Startseite.css";

export default function Startseite() {
  return (
    <div className="Startseite">
      <div className="row introduction">
        <div className="col">
          <h1>
            Hi, ich bin Elena! <FontAwesomeIcon icon={faFaceSmileBeam} />
          </h1>
          <h2 className="berufsbezeichnung">
            Junior Frontend Developer aus Ulm
          </h2>
          <p className="intro-text-anfang">
            Mein Weg in die Tech-Welt begann mit der Neugier, digitale Produkte
            nicht nur zu nutzen, sondern selbst zu gestalten. <br /> Inzwischen
            schreibe ich mit Begeisterung Code, besonders in{" "}
            <strong>React</strong>.
          </p>
          <p className="intro-text-ende">
            Code ist für mich mehr als nur Technik - es ist mein Werkzeug, um
            Ideen zum Leben zu erwecken. <br />
            Als Junior Frontend Developerin bringe ich frischen Wind, viel
            Motivation und einen vielseitigen Background mit und bin bereit, die
            digitale Welt ein kleines bisschen schöner und smarter zu machen.{" "}
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </p>
        </div>
        <div className="col">
          <img
            src={img}
            alt="Elena Würtz - Junior Front End Developer"
            className="img-startseite"
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
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
      </div>
      <div className="buttons">
        <a href="/ueber-mich" className="btn ueber-mich">
          Über mich
        </a>
        <a href="/projekte" className="btn projekte">
          Aktuelle Projekte
        </a>
      </div>
    </div>
  );
}

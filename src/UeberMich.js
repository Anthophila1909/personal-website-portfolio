import React from "react";
import img from "./imgs/elena-aboutme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import Lebenslauf_Elena_Wuertz from "./imgs/Lebenslauf_Elena_Wuertz.pdf";
import "./css/UeberMich.css";

export default function UeberMich() {
  return (
    <div className="UeberMich">
      <div className="header">
        <h1>Über mich</h1>
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <p className="intro-text text-start">
              Code ist für mich mehr als nur Technik - es ist mein Werkzeug, um
              Ideen zum Leben zu erwecken. <br />
              Als Junior Frontend Developerin bringe ich frischen Wind, viel
              Motivation und einen vielseitigen Background mit und bin bereit,
              die digitale Welt ein kleines bisschen schöner und smarter zu
              machen. <FontAwesomeIcon icon={faWandMagicSparkles} />
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm text-start">
            <p>
              Hi, ich bin Elena - operative Denkerin mit einer Schwäche für gut
              strukturierte Prozesse und digitale Produkte. Aktuell arbeite ich
              im Bereich Digital Operations bei einem E-Book-Verlag, wo ich
              Projekte leite, Datenprozesse optimiere und mit verschiedenen
              Teams zusammenarbeite. Parallel habe ich meine Leidenschaft fürs
              Programmieren entdeckt und eine Weiterbildung zur Frontend
              Developerin gemacht (
              <strong>JavaScript, React.js, Python, Git & Co.</strong>).
            </p>
            <p className="funfact">
              <strong>Fun Fact:</strong> Im August diesen Jahres bin ich in der
              "Cathedral of Counter-Strike" in Köln für die EPT Championship
              2025 (leider nur als Zuschauerin, nicht als Teilnehmerin ...).
            </p>
            <div className="lebenslauf">
              <a
                href={Lebenslauf_Elena_Wuertz}
                target="_blank"
                rel="noreferrer"
                title="Lebenslauf"
                className="btn lebenslauf-button"
              >
                Lebenslauf
              </a>
            </div>
          </div>
          <div className="col-sm">
            <img
              src={img}
              alt="Elena Würtz - Junior Front End Developer"
              className="img-uebermich"
            />
          </div>
        </div>
        <div className="kontakt">
          <h2>Kontakt:</h2>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:wuertzet@gmail.de" title="E-Mail senden">
                wuertzet@gmail.de
              </a>
            </li>
            <li>
              <strong>
                <a
                  href="https://de.linkedin.com/in/elena-w%C3%BCrtz-a47349285"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn-Profil"
                >
                  LinkedIn
                </a>
              </strong>
            </li>
            <li>
              <strong>
                <a
                  href="https://github.com/Anthophila1909"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub-Profil"
                >
                  GitHub
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

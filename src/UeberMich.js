import React from "react";
import img from "./imgs/elena-aboutme.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import "./css/UeberMich.css";

export default function UeberMich() {
  return (
    <div className="UeberMich">
      <h1>Über mich</h1>
      <div className="row mt-5 mb-5">
        <div className="col">
          <p>
            Hi, ich bin Elena - operative Denkerin mit einer Schwäche für gut
            strukturierte Prozesse und digitale Produkte. Aktuell arbeite ich im
            Bereich Digital Operations bei einem E-Book-Verlag, wo ich Projekte
            leite, Datenprozesse optimiere und mit verschiedenen Teams
            zusammenarbeite. Parallel habe ich meine Leidenschaft fürs
            Programmieren entdeckt und eine Weiterbildung zur Frontend
            Developerin gemacht (JavaScript, React.js, Python, Git & Co.). Was
            mich ausmacht? Ich liebe es, Neues zu lernen, zwischen Teams zu
            vermitteln und Lösungen zu finden, die wirklich funktionieren -
            technisch wie menschlich. 🚀
          </p>
          <p>
            <strong>Fun Fact:</strong> Im August diesen Jahres bin ich in der
            "Cathedral of Counter-Strike" in Köln für die EPT Championship 2025
            (leider nur als Zuschauerin, nicht als Teilnehmerin ...).
          </p>
          <p className="intro-text-ende">
            Code ist für mich mehr als nur Technik - es ist mein Werkzeug, um
            Ideen zum Leben zu erwecken. <br />
            Als Junior Frontend Developerin bringe ich frischen Wind, viel
            Motivation und einen vielseitigen Background mit und bin bereit, die
            digitale Welt ein kleines bisschen schöner und smarter zu machen.{" "}
            <FontAwesomeIcon icon={faWandMagicSparkles} />
          </p>
          <div className="lebenslauf">
            <a href="/" className="btn btn-primary">
              Lebenslauf
            </a>
          </div>
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
          <h2>Kontakt:</h2>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:wuertzet@gmail.de">wuertzet@gmail.de</a>
            </li>
            <li>
              <strong>
                <a
                  href="https://de.linkedin.com/in/elena-w%C3%BCrtz-a47349285"
                  target="_blank"
                  rel="noreferrer"
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

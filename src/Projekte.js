import React from "react";
import ProjectCarousel from "./ProjectCarousel";
import "./css/Projekte.css";

export default function Projekte() {
  return (
    <div className="Projekte">
      <div className="header">
        <h1>Meine Projekte</h1>
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm">
            <p className="projekte-intro-text text-start">
              Jedes Projekt ist für mich eine neue Gelegenheit, dazuzulernen,
              Ideen umzusetzen und mit Code echte Mehrwerte zu schaffen. Hier
              ist ein <strong>Einblick</strong> in das, woran ich bisher
              gearbeitet habe.
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <ProjectCarousel />
    </div>
  );
}

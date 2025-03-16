import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="row">
        <div className="col-4 text-end">
          <a
            href="https://github.com/Anthophila1909"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className="col-4">© 2025 Elena Würtz</div>
        <div className="col-4 text-start">
          <a
            href="https://de.linkedin.com/in/elena-w%C3%BCrtz-a47349285"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}

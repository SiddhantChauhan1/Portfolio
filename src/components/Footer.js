import { Container } from "react-bootstrap";

import logo from "../assets/img/logo2.png";
import linkedInIcon from "../assets/img/linkedin.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <img src={logo} alt="Logo" className="footer-logo" />
          <a 
            href="https://www.linkedin.com/in/siddhantc01/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="linkedin-link"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="linkedin-icon" />
          </a>
        </div>
      </Container>
    </footer>
  );
};

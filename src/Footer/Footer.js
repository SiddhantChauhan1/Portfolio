import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../assets/img/logo2.png";
import linkedInIcon from "../assets/img/linkedin.svg";
import githubIcon from "../assets/img/github.svg"; // Assuming a GitHub icon is available

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          {/* Name Logo */}
          <img src={logo} alt="Logo" className="footer-logo" />

          {/* Navigation Links */}
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <a href="#skills" className="footer-link">Skills</a>
            <a href="#projects" className="footer-link">Projects</a>
            <a href="#profiles" className="footer-link">Profiles</a>

          </div>

          {/* Social Buttons */}
          <div className="social-buttons">
            <a 
              href="https://www.linkedin.com/in/siddhantc01/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a 
              href="https://github.com/siddhantc01" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-button"
            >
              <img src={githubIcon} alt="GitHub" className="social-icon" />
            </a>
          </div>

          {/* Copyright Line */}
          <p className="footer-copyright">
            © {new Date().getFullYear()} Siddhant Singh Chauhan. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

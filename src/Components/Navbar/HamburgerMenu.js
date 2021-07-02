import { Link } from "react-router-dom";
import ContactBar from "../Contact/ContactBar";

export default function HamburgerMenu() {
  return (
    <div id="hamburger-menu-wrapper">
      <div className="border"></div>
      <div className="hamburger-menu-item">
        <Link to="/projects" className="navbar-link">
          Projects
        </Link>
      </div>
      <div className="border"></div>
      <div className="hamburger-menu-item">
        <Link to="/contact" className="navbar-link">
          Contact
        </Link>
      </div>
      <div className="border"></div>
      <div className="hamburger-menu-item">
        <a
          href="https://docs.google.com/document/d/1D8smaQN7y_C49jS_kc7FosSAoOVyJP3WUZFD7eW5I1M/edit?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="navbar-link"
        >
          Resume
        </a>
      </div>
      <div className="border"></div>
      <div className="contact-bar">
        <ContactBar />
        </div>
    </div>
  );
}

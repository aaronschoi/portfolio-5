import { Link } from "react-router-dom";

export default function NavbarChoices() {
  return (
      <ul id="hamburger-items" className="navbar-choices">
        <li>
          <Link to="/projects" className="navbar-link">Projects</Link>
        </li>
        <li>
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
        <li>
          <a
            href="https://docs.google.com/document/d/1D8smaQN7y_C49jS_kc7FosSAoOVyJP3WUZFD7eW5I1M/edit?usp=sharing"
            target="_blank"
            rel="noreferrer" className="navbar-link"
          >
            Resume
          </a>
        </li>
      </ul>
  );
}

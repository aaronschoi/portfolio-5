import Hamburger from "./Hamburger";
import NavbarChoices from "./NavbarChoices";
import HamburgerMenu from "./HamburgerMenu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div id="navbar-wrapper">
      <HamburgerMenu />
    <nav className="navbar">
      <Link to="/" className="navbar-name">
      <h1>Aaron Choi</h1>
      </Link>
      <Hamburger />
      <NavbarChoices />
    </nav>
    </div>
  );
}

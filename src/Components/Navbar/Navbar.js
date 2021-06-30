import Hamburger from "./Hamburger";
import NavbarChoices from "./NavbarChoices";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <div id="navbar-wrapper">
      <HamburgerMenu />
    <nav className="navbar">
      <h1>Aaron Choi</h1>
      <Hamburger />
      <NavbarChoices />
    </nav>
    </div>
  );
}

export default function ContactBar() {

  const copyEmail = event => {
    event.preventDefault();
    navigator.clipboard.writeText(event.target.getAttribute("alt"));
    alert("My email has been copied to your clipboard 😁")
  }

  return (
    <div className="contact-bar">
      <img
        src={require("./SVG/emailatsign.svg").default}
        alt="connect@aaronschoi.com"
        className="contact-svg"
        onClick={copyEmail}
      />
      <a href="https://github.com/aaronschoi" target="_blank" rel="noreferrer">
        <img
          src={require("./SVG/github.svg").default}
          alt="link to Github"
          className="contact-svg"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/aaronschoi/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={require("./SVG/linkedinround.svg").default}
          alt="link to LinkedIn"
          className="contact-svg"
        />
      </a>
    </div>
  );
}

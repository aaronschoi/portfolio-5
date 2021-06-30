export default function Hamburger() {

    const hamburgerHandler = event => {
        document.getElementById("navbar-wrapper").classList.toggle("change")
      }

    return(
        <div id="hamburger" onClick={hamburgerHandler}>
            <div className="bar-1" ></div>
            <div className="bar-2" ></div>
            <div className="bar-3" ></div>
        </div>
    )
}
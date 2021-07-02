import Navbar from "../Navbar/Navbar";
import { sayHello } from "../../utils/api";
import { useEffect } from "react";

export default function Main() {

    const hello = () => {
        const controller = new AbortController();
        sayHello(controller.signal)
        .then(console.log);
        return ()=> controller.abort();
    }

    useEffect(hello, [])

    return (
        <div className="component-container">
            <Navbar />
            <div className="main">
                <div className="about-me"><h3>Software Dev</h3><p><span>(with a)</span> passion for plants, persons with disabilites, and code.</p></div>
            </div>
        </div>
    )
}
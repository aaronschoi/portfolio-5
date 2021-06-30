import { Route, Switch } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";
import Main from "./Components/Main/Main";

export default function App() {
  return (
    <Switch>
      <Route exact={true} path="/contact">
        <Contact />
      </Route>
      <Route exact={true} path="/projects">
        <Projects />
      </Route>
      <Route exact={true} path="/">
        <Main />
      </Route>
    </Switch>
  );
}

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Registration from "./components/authentication/register";

const routing = (
  < Router >
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router >
);

function Home() {
  return <h2>Home</h2>;
}

export default function App() { return routing };
import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams  } from "react-router-dom";
import RecipeTopics from "./RecipeTopics";
import "./styles.css";





function CATEGORY() {
  return (
    <div>
      <h2>CATEGORY</h2>
    </div>
  );
}

function COUNTRY() {
  return (
    <div>
      <h2>COUNTRY</h2>
    </div>
  );
}

function VEGAN() {
  return (
    <div>
      <h2>VEGAN</h2>
    </div>
  );
}

export default function Routers() {
  return (
    <Router>
      <div className = "Routers">
        <ul>
          <li>
            <NavLink to="/" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              CATEGORY
            </NavLink>
          </li>
          <li>
            <NavLink to="/COUNTRY" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              COUNTRY
            </NavLink>
          </li>
          <li>
            <NavLink to="/VEGAN/Topic" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>VEGAN</NavLink>
          </li>
        </ul>

        <hr />
        <div>
          <Switch>
            <Route exact path="/">
              <CATEGORY />
            </Route>
            <Route path="/COUNTRY">
              <COUNTRY />
            </Route>
            <Route path="/VEGAN/:Topic">
              <RecipeTopics />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
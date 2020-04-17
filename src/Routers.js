import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams  } from "react-router-dom";
import RecipeTopics from "./RecipeTopics";
import CategorieList from "./CategorieList";
import CuisineList from "./CuisineList";
import Vegan from "./Vegan";
import RandomRecipe from "./RandomRecipe";
import Ingredients from "./Ingredients";
import AddRecipe from "./AddRecipe";
import "./styles.css";


function HOME() {
  return (
    <div>
      <h2>HOME</h2>
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
              color: "black"
            }}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/Category" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              CATEGORY
            </NavLink>
          </li>
          <li>
            <NavLink to="/CuisineList" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              CUISINE
            </NavLink>
          </li>
          <li>
            <NavLink to="/Vegan" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              VEGAN
            </NavLink>
          </li>
          <li>
            <NavLink to="/RandomRecipe" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              RANDOM RECIPE
            </NavLink>
          </li>
          <li>
            <NavLink to="/Ingredients" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              INGREDIENTS
            </NavLink>
          </li>
          <li>
            <NavLink to="/AddRecipe" activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>
              ADD RECIPE
            </NavLink>
          </li>
          <li>
            <NavLink to="/NEWTOPIC/TOPIC" activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}>NEWTOPIC</NavLink>
          </li>
        </ul>

        <hr />
        <div>
          <Switch>
            <Route exact path="/">
              <HOME />
            </Route>
            <Route exact path="/Category">
              <CategorieList />
            </Route>
            <Route path="/CuisineList">
              <CuisineList />
            </Route>
            <Route path="/Vegan">
              <Vegan />
            </Route>
            <Route path="/RandomRecipe">
              <RandomRecipe />
            </Route>
            <Route path="/Ingredients">
              <Ingredients />
            </Route>
            <Route path="/AddRecipe">
              <AddRecipe />
            </Route>
            <Route path="/NEWTOPIC/:TOPIC">
              <RecipeTopics />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
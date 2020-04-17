import React, { useState, useEffect } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import $ from "jquery";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import RecipeTopics from "./RecipeTopics";
import CategorieList from "./CategorieList";
import CuisineList from "./CuisineList";
import Vegan from "./Vegan";
import RandomRecipe from "./RandomRecipe";
import Ingredients from "./Ingredients";
import AddRecipe from "./AddRecipe";
import "./sidemenu.css";
import "./styles.css";

function sideMenuHandler() {
  $(".page").toggleClass("shazam");
}
function contentHandler() {
  $(".page").removeClass("shazam");
}

export default function App() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [myRecipes, setRecipes] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);

  return (
    <div className="App">
      <nav>
        NAVIGATION HERE
        {/* PUT SEARCH BAR HERE */}
        <ul>
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Category"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              CATEGORY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/CuisineList"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              CUISINE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Vegan"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              VEGAN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/RandomRecipe"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              RANDOM RECIPE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Ingredients"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              INGREDIENTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/AddRecipe"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              ADD RECIPE
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <RecipeList />
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
      </Switch>
    </div>
  );
}

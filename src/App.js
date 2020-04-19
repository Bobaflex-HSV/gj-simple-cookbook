import React, { useState, useEffect } from "react";
import { NavLink, Link, Switch, Route } from "react-router-dom";
import $ from "jquery";
import RecipeList from "./RecipeList";
import Recipe from "./Recipe";
import RecipeTopics from "./components/RecipeTopics";
import CategorieList from "./components/CategorieList";
import CuisineList from "./components/CuisineList";
import Vegan from "./components/Vegan";
import RandomRecipe from "./components/RandomRecipe";
import Ingredients from "./components/Ingredients";
import AddRecipe from "./components/AddRecipe";
import "./topmenu.css";
import "./styles.css";
{
  /*import "./sidemenu.css"; 

function sideMenuHandler() {
  $(".page").toggleClass("shazam");
}
function contentHandler() {
  $(".page").removeClass("shazam");
}
*/
}

export default function App() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/random.php";
  const [myRecipes, setRecipes] = useState(null);
  const [recipeExists, setRecipeExists] = useState(false);

  return (
    <div className="App">
      <nav>
        <div className="menu">
          <div className="label">
            <NavLink
              to="/"
              activeStyle={{
                color: "red"
              }}
            >
              <i className="icon fa fa-home fa-2x">
                {" "}
                <span className="menu-text">HOME</span>
              </i>
            </NavLink>
          </div>
          <div className="spacer" />
          <div className="label">
            <i className="icon fa fa-arrow-circle-o-right fa-2x">
              <span className="menu-text"> Serve me</span>
            </i>
          </div>
          <div className="spacer" />
          <div className="item">
            <NavLink
              to="/Category"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-list-ul fa-2x"> CATEGORY</i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="/CuisineList"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-globe fa-2x"> CUISINE</i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="/Vegan"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-pagelines fa-2x"> VEGAN</i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="/RandomRecipe"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-smile-o fa-2x"> SURPRISE ME</i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="/Ingredients"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-lemon-o fa-2x"> INGREDIENTS</i>
            </NavLink>
          </div>
          <div className="item">
            <NavLink
              to="/AddRecipe"
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}
            >
              <i className="icon fa fa-pencil-square-o fa-2x"> ADD RECIPE</i>
            </NavLink>
          </div>
        </div>
        <label>
          <div className="input-group mb-3 cb-search">
            <input
              type="text"
              className="form-control"
              placeholder="Search for recipes..."
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </label>
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

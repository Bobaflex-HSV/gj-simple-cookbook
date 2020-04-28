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
                <span className="menu-text">HOME</span>
              </i>
            </NavLink>
          </div>
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
              <i className="icon fa fa-list-ul fa-2x">
                {" "}
                <span className="menu-text"> CATEGORY</span>
              </i>
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
              <i className="icon fa fa-globe fa-2x">
                <span className="menu-text"> CUISINE</span>
              </i>
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
              <i className="icon fa fa-pagelines fa-2x">
                <span className="menu-text"> VEGAN</span>
              </i>
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
              <i className="icon fa fa-smile-o fa-2x">
                <span className="menu-text"> SURPRISE ME</span>
              </i>
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
              <i className="icon fa fa-lemon-o fa-2x">
                <span className="menu-text"> INGREDIENTS</span>
              </i>
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
              <i className="icon fa fa-pencil-square-o fa-2x">
                <span className="menu-text"> ADD RECIPE</span>
              </i>
            </NavLink>
          </div>
        </div>
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

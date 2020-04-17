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
      <span> TOP NAV goes here forever </span>
      <div className="page">
        <span className="menu_toggle" onClick={sideMenuHandler}>
          <i className="menu_open fa fa-bars fa-lg" />
          <i className="menu_close fa fa-times fa-lg" />
        </span>
        <ul className="menu_items">
          <li>
            <NavLink
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              <i className="icon fa fa-home fa-2x" />
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
              <i className="icon fa fa-list-ul fa-2x" /> Category
            </NavLink>
          </li>
          {/*
          <li>
            <a href="#">
              <i className="icon fa fa-globe fa-2x" /> Cuisine
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-list-ul fa-2x" /> Category
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-pagelines fa-2x" /> Only Vegan
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-smile-o fa-2x" /> Surprise me!
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-lemon-o fa-2x" /> Ingredients
            </a>
          </li>
          <li>
            <a href="#">
              <i className="icon fa fa-pencil-square-o fa-2x" /> Add Recipe
            </a>
          </li> */}
        </ul>

        <main className="content" onClick={contentHandler}>
          <div className="content_inner">
            <Switch>
              <Route exact path="/Category">
                <CategorieList />
              </Route>
            </Switch>
            <h1>Cretan Sfakia Pie</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
              dolorem, ducimus laudantium, earum eos natus sint voluptatum
              dolores fuga quibusdam consectetur dicta. Laudantium enim
              inventore iusto ducimus est velit aperiam tempora quibusdam id
              dolore natus perferendis, debitis distinctio optio repellendus,
              repellat molestias delectus harum eius, reiciendis dicta ipsum
              architecto! Eligendi expedita in beatae, placeat unde voluptatibus
              voluptates consectetur explicabo laudantium, officiis ad nihil.
              Beatae similique voluptate sequi voluptatem delectus iure in
              omnis, fuga ipsam nulla ipsum architecto, iste debitis nisi labore
              quisquam odio accusantium corporis sint perspiciatis. Excepturi
              earum nobis soluta, doloremque nihil dolorum illum quaerat magnam
              nemo non sed!
            </p>
          </div>
        </main>
      </div>
      {/*
      <nav>
        NAVIGATION HERE / SEARCHBAR?
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
            */}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./styles.css";

export default function RecipeList() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
  const [myRecipes, setRecipes] = useState({meals: []});
  const [search, setSearch] = useState("");

  // fetch recipe from API
  function fetchRecipes() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setRecipes(data.meals))
      .catch(console.log("Error"));
  }

  function onDeleteHandler(index) {
    setRecipes(
      myRecipes.filter((element, filterIndex) => index !== filterIndex)
    );
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  const filterRecipes = myRecipes.length 
  ?  myRecipes.filter(element => {
     return element.strMeal.toLowerCase().includes(search.toLocaleLowerCase());
   })
  : [];

  const searching = event => {
    setSearch(event.target.value)
    }

    const mySearch = event => {
      event.preventDefault();
      setRecipes(search);
      setSearch("");
    }

  return (
    <div>
      <label>
      <form  onSubmit = {mySearch} className = "search-form">

        <div className="input-group mb-3 cb-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search for recipes..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={searching}
            value = {search}
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
        </form>

      </label>
      <div>
        <button
          className="btn btn-info cb-button fetch-button"
          onClick={fetchRecipes}
        >
          Fetch Recipe
        </button>
        <br />
        {filterRecipes.map((element, index) => (
            <Recipe
              key={index}
              index={index}
              onDelete={onDeleteHandler}
              {...element}
              name={element.strMeal}
            />
          ))}
        {/** name of child component */}
        {/** strMeal is the name of Recipe in API object */}
      </div>
    </div>
  );
}

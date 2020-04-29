import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "./styles.css";
import "./topmenu.css";


export default function RecipeList() {
  const apiURL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
  const [myRecipes, setRecipes] = useState({ meals: [] });
  const [search, setSearch] = useState("");
  const [filterRecipes, setFilterRecipes] = useState([]);

  // fetch recipe from API
  function fetchRecipes() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        setRecipes(data.meals);
        setFilterRecipes(data.meals);
      })
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

  const searching = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    const newFilterRecipes = myRecipes.filter(element => {
      return element.strMeal.toLowerCase().includes(search.toLocaleLowerCase());
    });
    setFilterRecipes(newFilterRecipes);
    setSearch("");
  };

  return (
    <div>
      <form onSubmit={getSearch} className="search-form">
        <div className="input-group mb-3 cb-search">
          <input
            type="text"
            className="form-control"
            placeholder="Search for recipes..."
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            onChange={searching}
            value={search}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </div>
        </div>
      </form>

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
          />
        ))}
        {/** name of child component */}
        {/** strMeal is the name of Recipe in API object */}
      </div>
    </div>
  );
}
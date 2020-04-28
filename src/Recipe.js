import React from "react";
import "./styles.css";


export default ({ strMeal, index, strMeasure7, strIngredient4, strIngredient7, strIngredient6,  strMeasure6, strIngredient5, strMeasure4, strMeasure5, strMeasure2, strIngredient3, strMeasure3, strIngredient2, strInstructions, strMeasure1, strIngredient1, strArea, strCategory, strMealThumb, onDelete }) => {
  return (
    <div className="recipe-wrapper">
      <div className="card" style={{ width: 50 + "rem" }}>
        <div className="card-body">
          <h2 className="card-title">
            <span className="badge badge-primary cb-badge">{strMeal}</span>
          </h2>
        </div>

        <img
          src={strMealThumb}
          className="card-img-top recipe-image img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">
            <span className="badge badge-primary cb-badge">
              Category:
              <span className="badge badge-light cb-nested-badge">
                {strCategory}
              </span>
            </span>
            <span className="badge badge-primary cb-badge">
              Cuisine:
              <span className="badge badge-light cb-nested-badge">
                {strArea}
              </span>
            </span>
          </h4>
          <div className="cb-container">
            <div>
              <h3>
                <span className="badge badge-dark cb-badge">Instructions</span>
              </h3>
              {strInstructions}
            </div>
          </div>
          <div className="cb-container">
            <h3>
              <span className="badge badge-dark cb-badge">Ingredients</span>
            </h3>
            {/*<IngredientTable />*/}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Measurement</th>
                  <th scope="col">Ingredient</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{strMeasure1}</td>
                  <td>{strIngredient1}</td>
                </tr>
                <tr>
                  <td>{strMeasure2}</td>
                  <td>{strIngredient2}</td>
                </tr>
                <tr>
                  <td>{strMeasure3}</td>
                  <td>{strIngredient3}</td>
                </tr>
                <tr>
                  <td>{strMeasure4}</td>
                  <td>{strIngredient4}</td>
                </tr>
                {strMeasure5 !== "" && (
                  <tr>
                    <td>{strMeasure5}</td>
                    <td>{strIngredient5}</td>
                  </tr>
                )}
                {strMeasure6 !== "" && (
                  <tr>
                    <td>{strMeasure6}</td>
                    <td>{strIngredient6}</td>
                  </tr>
                )}
                {strMeasure7 !== "" && (
                  <tr>
                    <td>{strMeasure7}</td>
                    <td>{strIngredient7}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card-body">
          <button
            onClick={() => onDelete(index)}
            className="btn btn-danger delete-button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

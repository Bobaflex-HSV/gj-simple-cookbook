import React, { useState } from "react";
import "./styles.css";


export default ({ data, index, onDelete }) => {
  return (
    <div className="recipe-wrapper">
      <div className="card" style={{ width: 50 + "rem" }}>
        <div className="card-body">
          <h2 className="card-title">
            <span className="badge badge-primary cb-badge">{data.strMeal}</span>
          </h2>
        </div>

        <img
          src={data.strMealThumb}
          className="card-img-top recipe-image img-thumbnail"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">
            <span className="badge badge-primary cb-badge">
              Category:
              <span className="badge badge-light cb-nested-badge">
                {data.strCategory}
              </span>
            </span>
            <span className="badge badge-primary cb-badge">
              Cuisine:
              <span className="badge badge-light cb-nested-badge">
                {data.strArea}
              </span>
            </span>
          </h4>
          <div className="cb-container">
            <p>
              <h3>
                <span className="badge badge-dark cb-badge">Instructions</span>
              </h3>
              {data.strInstructions}
            </p>
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
                  <td>{data.strMeasure1}</td>
                  <td>{data.strIngredient1}</td>
                </tr>
                <tr>
                  <td>{data.strMeasure2}</td>
                  <td>{data.strIngredient2}</td>
                </tr>
                <tr>
                  <td>{data.strMeasure3}</td>
                  <td>{data.strIngredient3}</td>
                </tr>
                <tr>
                  <td>{data.strMeasure4}</td>
                  <td>{data.strIngredient4}</td>
                </tr>
                {data.strMeasure5 !== "" && (
                  <tr>
                    <td>{data.strMeasure5}</td>
                    <td>{data.strIngredient5}</td>
                  </tr>
                )}
                {data.strMeasure6 !== "" && (
                  <tr>
                    <td>{data.strMeasure6}</td>
                    <td>{data.strIngredient6}</td>
                  </tr>
                )}
                {data.strMeasure7 !== "" && (
                  <tr>
                    <td>{data.strMeasure7}</td>
                    <td>{data.strIngredient7}</td>
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

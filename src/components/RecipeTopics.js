import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useParams  } from "react-router-dom";


export default function RecipeTopics(){
let {Topic, url, path} = useParams();

return (
<div>
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to={"url/rendering"}>Diets</NavLink>
        </li>
        <li>
          <NavLink to={"url/components"}>Exclusive Recipes</NavLink>
        </li>
        <li>
          <NavLink to={"url/props-v-state"}>Other</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a {Topic}.</h3>
        </Route>
        <Route path={"/:topicId"}>
        </Route>
      </Switch>
    </div>
  </div>

)

function newTopic() {
  let { topicId } = useParams();

  return (
    <div>
  <h3>{topicId}</h3>
hello
  </div>
  );
  }
}


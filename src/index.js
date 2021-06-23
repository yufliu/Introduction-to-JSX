import React from "react";
import ReactDOM from "react-dom";

const name = "Angela";
const lastname = "Yu";
const number = "11";

ReactDOM.render(
  <div>
    <h1>
      Hello {name} {lastname}!{" "}
    </h1>
    <h1>Hello {name + " " + lastname}! </h1>
    <p> My favorite number is {number}</p>
  </div>,
  document.getElementById("root")
);

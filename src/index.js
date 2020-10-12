import React from "react"; // for Javascript ES6+
import ReactDom from "react-dom";

// must capitalize component names in React
const Greeting = () => {
  return <h4>This is Makoi. Here is my first component</h4>;
};

// render method looks for code to render & a location of where we want to render it
// most always self-close functions with <... />
// Here, we inject our javascript into the div with id = root
ReactDom.render(<Greeting />, document.getElementById("root"));

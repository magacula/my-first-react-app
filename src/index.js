import React from "react"; // for Javascript ES6+
import ReactDOM from "react-dom";

// imports CSS file
import "./index.css";

// imports Books Data file
import { books } from "./books";

// imports Book Component
import Book from "./Book";

// Must capitalize component names in React
// This is an example of a Stateless Functional component (always returns JSX)
// This is the normal way to set up functions

/* JSX Rule Reminders:
- return single element in div, section, article or fragment
    - (cant have empty div statements)
- use camelCase format for html attributes
- use className for classes
- close every element (even img and input tags)
*/
const Greeting = () => {
  return (
    <div>
      {/* This is an example of how to add comments in JSX */}
      <h4>This is Makoi. Here is my first component</h4>
    </div>
  );
};

// OR we can write it this way if we want to return one element
// (nfn) creates a named function
/*
const Greeting = () => {
  return React.createElement(
    "h4",
    {},
    "This is Makoi. Here is my first component"
  );
};
*/

// We could also Nest components
/*
const Greeting = () => {
  return (
    // always have to return single elements in div, section, article or fragment
    // (cant have empty div statements)
    <div>
      <h4>This is Makoi. Here is my first component</h4>
      <Message />
    </div>
  );
};
const Message = () => <p>Hi this is a message</p>;
*/

// render method looks for code to render & a location of where we want to render it
// most always self-close components with <... />
// Here, we inject our javascript into the div with id = root

/* ReactDOM.render(<Greeting />, document.getElementById("root"));*/

//////// Uses separate components to make many instances of a bigger component //////

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        // Lists in React need a Key Property with a unique ID value
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));

// The map() function lets you manipulate the items in an array by iterating and accessing individual items

/*
const names = ["Bob", "Janet", "Phil"];
const printNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(names);
const NamesList = () => {
  return <section>{printNames}</section>;
};

ReactDOM.render(<NamesList />, document.getElementById("root"));
*/

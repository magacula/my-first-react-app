import React from "react"; // for Javascript ES6+
import ReactDOM from "react-dom";

//CSS
import "./index.css";

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

// Create an array of books and iterate over array to retrieve properties
const books = [
  {
    id: 0,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/61zdzbAmmQL._AC_UL210_SR210,210_.jpg",
    title: "The Book of Five RIngs",
    author: "Miyamoto Musashi",
  },
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/710glEdDlfL._AC_UL210_SR210,210_.jpg",
    title: "Influence: The Psychology of Persuasion",
    author: "Robert B. Cialdini",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51YO6t2XmrL._AC_UL210_SR210,210_.jpg",
    title: "The Art of Peace: Teachings of the",
    author: "Morihei Ueshiba",
  },
];

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

const Book = (props) => {
  console.log(props);
  // We can destructing props to retrieve property values inside the component
  const { img, title, author } = props.book;

  // Create EventHandler to handle click event
  const clickHandler = () => {
    alert("Hi!");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    // use an inline event handler function to handle mouseover events
    <article
      className="book"
      onMouseOver={() => {
        console.log({ title });
      }}
    >
      <img className="images" src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Button
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
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

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

//////// Uses separate components to make many instances of a bigger component ///////
const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/41JFPRxkrLL._AC_UY218_.jpg"
    class="s-image"
    alt="The Art of War"
    srcset="https://m.media-amazon.com/images/I/41JFPRxkrLL._AC_UY218_.jpg 1x, https://m.media-amazon.com/images/I/41JFPRxkrLL._AC_UY327_FMwebp_QL65_.jpg 1.5x, https://m.media-amazon.com/images/I/41JFPRxkrLL._AC_UY436_FMwebp_QL65_.jpg 2x, https://m.media-amazon.com/images/I/41JFPRxkrLL._AC_UY500_FMwebp_QL65_.jpg 2.2935x"
    data-image-index="4"
    data-image-load=""
    data-image-latency="s-product-image"
    data-image-source-density="1"
  ></img>
);

const Title = () => <h1>Title of a book</h1>;

const Author = () => <h4>Author Name</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));

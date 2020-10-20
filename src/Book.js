/** File we will use to hold our component **/
// snippet rafc will create a default component based on file name

import React from "react";

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

export default Book; // Can have only 1 export default

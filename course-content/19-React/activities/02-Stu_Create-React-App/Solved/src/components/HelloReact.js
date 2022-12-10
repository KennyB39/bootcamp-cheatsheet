import React from 'react';

// TODO: Add a comment explaining what a react component is
// Components are responsible for rendering some part of an application's UI.
// Components let us split the UI into independent, reusable pieces, and also think about each piece in isolation.
function HelloReact() {
  const text = 'some text';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  //If you'd like to render curly braces as plain text within a JSX document simply use the HTML character codes.
  console.log("text: ", text);
  return <p>Hello World! Here is {text} inside the &#123; curly braces &#125;</p>;
}

export default HelloReact;
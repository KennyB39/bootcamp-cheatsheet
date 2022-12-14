import React from 'react';

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function ResultList({results}) {
  return (
    <ul className="list-group">
      {results.map((result) => (
        <li className="list-group-item" key={result.id}>
          <img
            alt={result.title}
            className="img-fluid"
            src={result.images.original.url}
          />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;

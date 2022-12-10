import React from 'react';

// TODO: Modify this function so that it accepts props from the parent component
export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };


  // TODO: Update the return statement to display the data we received as props
  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={props.img}
          
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Name: {/* Display the dog's name here */}</h5>
          <p className="card-text">Description: {/* Display the dog's description here */}</p>
          <p className="card-text">ID: {/* Display the dog's id here */}</p>
          <a href="#" className="btn btn-primary">
            Adopt {/* Display the dog's name here */}
          </a>
        </div>
      </div>
    </div>
  );
}

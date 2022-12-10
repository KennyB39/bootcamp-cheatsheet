import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  img: "https://media-be.chewy.com/wp-content/uploads/2021/06/29102244/PembrokeWelshCorgi-FeaturedImage-1024x615.jpg",
  id: 1,
};


export default function Display() {
  return (
    <div>
        {/* TODO: Write logic that will render a Card component for the dog */}
        {/* TODO: Pass `name`, `description`, img, and `id` to the Card component as props */}
        <Card img={canine.img}/>
    </div>
  );
}

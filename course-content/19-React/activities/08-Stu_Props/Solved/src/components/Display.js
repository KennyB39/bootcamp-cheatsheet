import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

const corgImgs = ["https://media-be.chewy.com/wp-content/uploads/2021/06/29102244/PembrokeWelshCorgi-FeaturedImage-1024x615.jpg", "https://www.rover.com/blog/wp-content/uploads/2019/01/6342530545_45ec8696c8_b-960x540.jpg", "https://www.thefarmersdog.com/digest/wp-content/uploads/2021/12/corgi-top-1400x871.jpg"];


export default function Display() {
  return (
    <div>
        <Card name={canine.name}  description={canine.description} id={canine.id} img={corgImgs[0]} />
        <Card name={"farley"} description={"Great!"} id={2} img={corgImgs[1]} />
        <Card name={"Asher"} description={"Meh"} id={3} img={corgImgs[2]} />
    </div>
  );
}

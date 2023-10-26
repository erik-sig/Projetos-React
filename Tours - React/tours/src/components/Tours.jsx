import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>Tours</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => (
        <Tour key={tour.id} tour={tour} removeTour={removeTour}></Tour>
      ))}
    </section>
  );
};

export default Tours;

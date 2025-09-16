import React from "react";

export default function Listings({ listings }) {
  return (
    <div>
      {listings.map((item) => (
        <div key={item.id}>
          <img src={item.image} />

          <div>
            <h3>{item.location}</h3>
            <h3>{item.price}</h3>
            <h3>{item.nights}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


export default function Listings({ listings }) {
  return (
    <div>
      {listings.map((item) => (
        <div key={item.id}>
          <img src={item.image} />

          <div>
            <h3>{item.propertyType} in {item.city}</h3>
            <h3>${item.price} for {item.nights} nights <span><FontAwesomeIcon icon={faStar}/></span> {item.rating}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Listings({ listings, city }) {
  const cityListings = listings.filter(item => item.city === city).slice(0,3);
  return (
    <div className="listingView">
    <h1 className="popularHomes">Popular homes in {city}</h1>
    <div className="imageListingContainer">
      {cityListings.map((item) => (
        <div key={item.id}>
          <img src={item.image} />

          <h2 className="propertyCity">
            {item.propertyType} in {item.city}
          </h2>
          <h3 className="propertyDetails">
            ${item.price} for {item.nights} nights{" "}
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>{" "}
            {item.rating}
          </h3>
        </div>
      ))}
    </div>

    </div>
  );
}

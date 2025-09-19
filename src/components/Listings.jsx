import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Listings({ listings, city }) {
  const cityListings = listings
    .filter((item) => item.city === city)
    .slice(0, 3);
  return (
    <div className="listingView">
      <h1 className="popularHomes">
        Popular homes in {city} <FontAwesomeIcon className="chevronRight" icon={faChevronRight} />
      </h1>
      <div className="imageListingContainer">
        {cityListings.map((item) => (
          <div key={item.id}>
            <div className="imageWrapper">
            <img src={item.image} />

            {item.isGuestFavorite && item.rating > 4 ? (
              <span className="guestFavorite">Guest Favorite</span>
            ): null}
            </div>

            <h2 className="propertyCity">
              {item.propertyType} in {item.city}
            </h2>
            <h3 className="propertyDetails">
              ${item.price} for {item.nights} nights{" "}
              <span>
                <FontAwesomeIcon className="starIcon" icon={faStar} />
              </span>{" "}
              {item.rating}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

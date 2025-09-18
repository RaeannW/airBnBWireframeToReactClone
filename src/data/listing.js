const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

function getRandomRating() {
  return (Math.random() * 5 + 1).toFixed(2);
}

const mockListings = [
  {
    id: 1,
    price: 751,
    nights: 2,
    city: "Branson",
    state: "MO",
    propertyType: "Treehouse",
    rating: getRandomRating(),
    isGuestFavorite: true,
  },
  {
    id: 2,
    price: 597,
    nights: 2,
    city: "Branson",
    state: "MO",
    propertyType: "Home",
    rating: getRandomRating(),
    isGuestFavorite: true,
  },
  {
    id: 3,
    price: 600,
    nights: 2,
    city: "Branson",
    state: "MO",
    propertyType: "Home",
    rating: getRandomRating(),
    isGuestFavorite: false,
  },
  {
    id: 4,
    price: 308,
    nights: 2,
    city: "Kansas City",
    state: "MO",
    propertyType: "Apartment",
    rating: getRandomRating(),
    isGuestFavorite: true,
  },
  {
    id: 5,
    price: 329,
    nights: 2,
    city: "Kansas City",
    state: "MO",
    propertyType: "Guest suite",
    rating: getRandomRating(),
    isGuestFavorite: true,
  },
  {
    id: 6,
    price: 350,
    nights: 2,
    city: "Kansas City",
    state: "MO",
    propertyType: "Apartment",
    rating: getRandomRating(),
    isGuestFavorite: false,
  },
];

export async function getListings() {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=apartment&per_page=${mockListings.length}&client_id=${ACCESS_KEY}`
  );
  const data = await res.json();

  const images = data.results.map((img) => img.urls.small);

  return mockListings.map((listing, i) => ({
    ...listing,
    image: images[i] || "https://via.placeholder.com/400",
  }));
}

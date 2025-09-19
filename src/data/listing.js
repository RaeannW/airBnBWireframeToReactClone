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
    propertyType: "Condo",
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
    propertyType: "Home",
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
  const propertyTypes = [...new Set(mockListings.map((l) => l.propertyType))];
  const imagesByType = {};
  await Promise.all(
    propertyTypes.map(async (type) => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${type}&per_page=10&client_id=${ACCESS_KEY}`
      );
      const data = await res.json();
      imagesByType[type] = data.results.map((img) => img.urls.small);
    })
  );

  const listingsWithImages = mockListings.map((listing) => {
    const imgs = imagesByType[listing.propertyType];
    const image =
      imgs[Math.floor(Math.random() * imgs.length)] ||
      "https://via.placeholder.com/400";
    return { ...listing, image };
  });

  return listingsWithImages;
}

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

const mockListings = [
    { id: 1, price: 120, nights: 3, location: "Seattle, WA" },
    { id: 2, price: 250, nights: 3, location: "Chicago, IL"},
    { id: 3, price: 200, nights: 2, location: "Orlando, FL"}
]

export async function getListings() {
    const res = await fetch(
            `https://api.unsplash.com/search/photos?query=apartment&per_page=${mockListings.length}&client_id=${ACCESS_KEY}`
    );
    const data = await res.json();

    const images = data.results.map(img => img.urls.small);

    return mockListings.map((listing, i) => ({
        ...listing,
        image: images[i] || "https://via.placeholder.com/400"
    }));
}

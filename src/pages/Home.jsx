import { useEffect, useState } from "react";
import Listings from "../components/Listings";
import { getListings } from "../data/listing";
import Nav from "../components/Nav";

export default function Home() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    getListings().then(setListings);
  }, []);

  return (
    <>
      <Nav />
      <Listings listings={listings} />
    </>
  );
}

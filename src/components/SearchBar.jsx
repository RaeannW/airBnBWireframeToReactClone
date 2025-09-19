import { useState } from "react";
import searchIcon from "../assets/searchIcon.png";

export default function SearchBar({handleSearch}) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
       <img src={searchIcon} alt="search"/>
        <input
        type="text"
        placeholder="Start your Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="searchButton"
        />

    </form>
  )
}

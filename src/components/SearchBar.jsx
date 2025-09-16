import { useState } from "react";

export default function SearchBar({handleSearch}) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(query);
    };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
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

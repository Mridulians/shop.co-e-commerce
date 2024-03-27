import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Mridul = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const searchItems = () => {
    navigate(`/ds?query=${searchQuery}`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchItems();
    }
  };
  return (
    <>
      <input
        type="text"
        className="searchBar"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyPress} // Add event listener for key pres
        // onClick={searchItems}
      />
      <FaSearch className="magni" onClick={searchItems} />
    </>
  );
};

export default Mridul;

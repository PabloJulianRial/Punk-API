import { useState } from "react";
import "../SearchBox/SearchBox.scss";

const SearchBox = () => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const toggleSearchBox = () => {
    if (!showSearchBar) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };

  let searchBarClass = `search-box__input--${showSearchBar}`;

  return (
    <div className="search-box">
      <input type="text" className={searchBarClass} />
      <i
        className="fa-solid fa-magnifying-glass search-box__icon"
        onClick={toggleSearchBox}
      ></i>
    </div>
  );
};
export default SearchBox;

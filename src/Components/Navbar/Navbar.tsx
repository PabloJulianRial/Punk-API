import OptionsList from "../OptionsList/OptionsList";
import SearchBox from "../SearchBox/SearchBox";
import "../Navbar/Navbar.scss";
function NavBar() {
  return (
    <div className="navbar">
      <SearchBox />
      <OptionsList />
    </div>
  );
}

export default NavBar;

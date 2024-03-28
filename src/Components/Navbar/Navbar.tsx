import SearchBox from "../SearchBox/SearchBox";
import "../Navbar/Navbar.scss";
import Header from "../Header/Header";
import { useState } from "react";
function NavBar() {
  return (
    <div className="navbar">
      <Header />
      <SearchBox />
    </div>
  );
}

export default NavBar;

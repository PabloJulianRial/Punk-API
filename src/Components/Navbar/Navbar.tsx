import SearchBox from "../SearchBox/SearchBox";
import "../Navbar/Navbar.scss";
import Header from "../Header/Header";
import { FormEventHandler } from "react";

type NavbarProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

function NavBar({ searchTerm, handleInput }: NavbarProps) {
  return (
    <div className="navbar">
      <Header />
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  );
}

export default NavBar;

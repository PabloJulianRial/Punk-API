import SearchBox from "../SearchBox/SearchBox";
import "../Navbar/Navbar.scss";
import Header from "../Header/Header";
import { FormEventHandler } from "react";

type NavbarProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
  checkedBoxes: string[];
};

function NavBar({
  handleCheckboxChangeRemove,
  searchTerm,
  handleInput,
  handleCheckboxChange,
}: NavbarProps) {
  return (
    <div className="navbar">
      <Header
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
      />
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  );
}

export default NavBar;

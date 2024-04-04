import "../Header/Header.scss";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";

type HeaderProps = {
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
};

function Header({
  handleCheckboxChange,
  handleCheckboxChangeRemove,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <NavMenu
        isMenuOpen={isMenuOpen}
        onClose={toggleNav}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
      />

      <i className="fa-solid fa-bars header__menu" onClick={toggleNav}></i>
      <h2 className="hidden">Beer search engine Punk API</h2>
      <div className="header__head">
        <h2 className="header__head--title">Punk API</h2>

        <i className="fa-solid fa-beer-mug-empty header__head--img"></i>
      </div>

      <i className="fa-solid fa-lightbulb header__head--icon"></i>
    </div>
  );
}

export default Header;

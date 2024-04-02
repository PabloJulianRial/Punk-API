import "../Suggestions/Suggestions";
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
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  return (
    <div className="header">
      {showNav && (
        <NavMenu
          onClose={toggleNav}
          handleCheckboxChange={handleCheckboxChange}
          handleCheckboxChangeRemove={handleCheckboxChangeRemove}
        />
      )}
      <i className="fa-solid fa-bars header__menu" onClick={toggleNav}></i>

      <div className="header__head">
        <h2 className="header__head--title">Punk API</h2>
        <i className="fa-solid fa-beer-mug-empty header__head--img"></i>
      </div>

      <i className="fa-solid fa-lightbulb header__head--icon"></i>
    </div>
  );
}

export default Header;

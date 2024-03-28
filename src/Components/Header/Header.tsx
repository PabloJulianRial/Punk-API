import "../Suggestions/Suggestions";
import Suggestions from "../Suggestions/Suggestions";
import "../Header/Header.scss";
function Header() {
  return (
    <div className="header">
      <i className="fa-solid fa-bars header__menu"></i>

      <div className="header__head">
        <h2 className="header__head--title">Punk API</h2>
        <i className="fa-solid fa-beer-mug-empty header__head--img"></i>
      </div>

      <i className="fa-solid fa-lightbulb header__head--icon"></i>
    </div>
  );
}

export default Header;

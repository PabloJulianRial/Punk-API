import "./NavMenu.scss";
import blackCross from "../../assets/icons/black-cross.png";
type NavMenuProps = {
  onClose: () => void;
};

const NavMenu = ({ onClose }: NavMenuProps) => {
  return (
    <div className="nav-menu">
      <img className="nav-cross" src={blackCross} alt="" onClick={onClose} />
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="abv"
          name="abv"
        />
        <label className="nav-menu__label" htmlFor="abv">
          ABV
        </label>
      </div>

      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="Classic"
          name="Classic"
        />
        <label className="nav-menu__label" htmlFor="Classic">
          Classic range
        </label>
      </div>
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="Acidity"
          name="Acidity"
        />
        <label className="nav-menu__label" htmlFor="Acidity">
          Acidity
        </label>
      </div>
    </div>
  );
};

export default NavMenu;

import "./NavMenu.scss";
import blackCross from "../../assets/icons/black-cross.png";
type NavMenuProps = {
  onClose: () => void;
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
};

const NavMenu = ({
  onClose,
  handleCheckboxChange,
  handleCheckboxChangeRemove,
}: NavMenuProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      handleCheckboxChange(name);
    } else {
      handleCheckboxChangeRemove(name);
    }
  };

  return (
    <div className="nav-menu">
      <img className="nav-cross" src={blackCross} alt="" onClick={onClose} />
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="abv"
          name="abv"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="abv">
          ABV
        </label>
      </div>

      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="classic"
          name="classic"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="Classic">
          Classic range
        </label>
      </div>
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="acidity"
          name="acidity"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="Acidity">
          Acidity
        </label>
      </div>
    </div>
  );
};

export default NavMenu;
